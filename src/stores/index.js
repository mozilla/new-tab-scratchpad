import { writable } from "svelte/store";
import { colorways } from "../data";

export const colorway = writable(colorways[0]);

