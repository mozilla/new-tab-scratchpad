import { writable } from 'svelte/store'

const PREF_KEY = 'general-preferences'
const DEFAULT = {
  search_enabled: true,
  search_engine: 'google',

  topSites_enabled: true,
  topSites_rows: 1,
  topSites_addedItem: false,

  pocket_enabled: true,
  pocket_rows: 4,
  pocket_sponsored: true,

  highlights_enabled: false,
  highlights_rows: 1,
  highlights_visitedPages: true,
  highlights_bookmarks: true,
  highlights_downloads: true,
  highlights_pocket: true,

  snippets_enabled: false,

  testing_enabled: false,
  testing_rtl: false,
  testing_logo: 1,
}

// This might seem dumb, to use localStorage AND browser.storage, but localStorage
// access is instant so there is no "Flash of unfetched settings"-scenario.
function createBackground() {
  let startValue = null
  if (localStorage[PREF_KEY]) {
    startValue = JSON.parse(localStorage[PREF_KEY])
  }
  const { subscribe, set } = writable(startValue || DEFAULT, () => {
    browser.storage.onChanged.addListener(onChanged)

    return () => {
      browser.storage.onChanged.removeListener(onChanged)
    }
  })

  const onChanged = (changes) => {
    if (changes[PREF_KEY]) {
      set(changes[PREF_KEY].newValue)
      localStorage[PREF_KEY] = JSON.stringify(changes[PREF_KEY].newValue)
    }
  }

  browser.storage.local.get(PREF_KEY).then((res) => {
    set({...DEFAULT, ...(res[PREF_KEY] as any)} || DEFAULT)
  })

  return {
    subscribe,
    set: (value) => {
      const o = {}
      o[PREF_KEY] = value
      browser.storage.local.set(o)
    },
  }
}

export default createBackground()
