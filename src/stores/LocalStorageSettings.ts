import { writable } from "svelte/store";

const localStorageSettings = writable<boolean>(
  !!localStorage.getItem("saved_codes"),
);

export default localStorageSettings;
