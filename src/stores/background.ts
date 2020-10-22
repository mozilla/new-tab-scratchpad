import { writable } from 'svelte/store'

const BG_KEY = 'background'
const DEFAULT = 'auto'

function createBackground() {
  const { subscribe, set } = writable('', () => {
    browser.storage.onChanged.addListener(onChanged)

    return () => {
      browser.storage.onChanged.removeListener(onChanged)
    }
  })

  const onChanged = (changes) => {
    if (changes[BG_KEY]) {
      set(changes[BG_KEY].newValue)
    }
  }

  browser.storage.sync.get(BG_KEY).then((res) => set((res[BG_KEY] as any) || DEFAULT))

  return {
    subscribe,
    set: (value) => {
      const o = {}
      o[BG_KEY] = value
      browser.storage.sync.set(o)
    },
  }
}

export default createBackground()
