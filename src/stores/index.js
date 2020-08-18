import { writable } from "svelte/store";
import { colorways, bgImages } from "../data";

export const colorway = writable(colorways[0]);
export const bgImage = writable(bgImages[0]);


