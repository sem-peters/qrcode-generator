<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  // Props
  export let tag: string = "div";
  export let horizontalDrag: boolean = true;
  export let verticalDrag: boolean = true;

  // State
  let dragging = false;

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
  });

  onDestroy(() => {
    window.removeEventListener("mouseup", stopDragging);
  });
</script>

<svelte:element this={tag} class="draggable" on:mousedown={startDragging}>
  <slot />
</svelte:element>

<style lang="scss">
  .draggable {
    max-width: 100%;
    overflow: scroll;
    cursor: move;
    cursor: grab;

    &:active {
      cursor: grabbing;
      cursor: -moz-grabbing;
      cursor: -webkit-grabbing;
    }
  }
</style>
