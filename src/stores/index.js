import { writable } from "svelte/store";
import {colorWays } from '../data'

export const theme = writable({
         brightText: colorWays[0].brightText,
         primary: colorWays[0].primary,
         secondary: colorWays[0].secondary,
         tertiary: colorWays[0].tertiary,
         image: null
       });
