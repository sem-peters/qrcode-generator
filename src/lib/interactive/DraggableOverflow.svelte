<script context="module" lang="ts">
  export enum HeightProp {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
  }
</script>

<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { generateRandomId } from '../../utils/dom-util';

  // Props
  export let tag: string = "div";
  export let horizontalDrag: boolean = true;
  export let verticalDrag: boolean = true;
  export let height: HeightProp = HeightProp.SMALL;

  // State
  let randomId: string;
  let childComponent: Element 

  // Functions
  const drag = (e: MouseEvent) => {
    const element = e.target as HTMLElement;
    const draggable = element.parentElement as HTMLElement;
    if (draggable) {
      if (horizontalDrag) {
        draggable.scrollLeft -= e.movementX;
      }
      if (verticalDrag) {
        draggable.scrollTop -= e.movementY;
      }
    }
  };

  const stopDragging = () => {
    window.removeEventListener("mousemove", drag);
  };
  const startDragging = () => {
    window.addEventListener("mousemove", drag);
  };

  // Lifecycle hooks
  onMount(() => {
    window.addEventListener("mouseup", stopDragging);
    randomId = generateRandomId(6)
    childComponent.id = randomId;
  });

  onDestroy(() => {
    window.removeEventListener("mouseup", stopDragging);
  });

</script>

<svelte:element
  this={tag}
  class={"draggable " + height}
  on:mousedown={startDragging}
  bind:this={childComponent}
  role="scrollbar"
  aria-controls={randomId}
  tabindex={-1}
>
  <slot />
</svelte:element>

<style lang="scss">
  .draggable {
    overflow: scroll;
    cursor: move;
    cursor: grab;

    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }

    &.small {
      height: 10em;
    }

    &.medium {
      height: 15em;
    }

    &.large {
      height: 25em;
    }
  }
</style>
