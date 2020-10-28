import { readable } from 'svelte/store';

export default function(mediaQuery: string) {
  let mql = window.matchMedia(mediaQuery);

  return readable(mql.matches, function start(set) {
    const listener = e => set(e.matches)
    mql.addEventListener('change', listener);
    return function stop() {
      mql.removeEventListener('change', listener);
    };
  });
}
