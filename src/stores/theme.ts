import { writable } from 'svelte/store'
import themes from '../data/themes'

type Theme = browser.theme.Theme

function createBackground() {
  const { subscribe, set } = writable(themes.auto as any, () => {
    const changeHandler = (changes) => themeChanged(changes.theme)

    ;(browser.theme as any).onUpdated.addListener(changeHandler)

    return () => {
      ;(browser.theme as any).onUpdated.removeListener(changeHandler)
    }
  })

  const themeChanged = (theme: Theme) => {
    set(getOrGenerateTheme(theme))
  }

  browser.theme.getCurrent().then(themeChanged)

  return {
    subscribe,
    set: (themeId) => {
      // Since we can't really set a theme, just reset
      if (themeId === 'unknown' || themeId === 'auto' || themeId === 'alpenglow') {
        browser.theme
          .reset()
          .then(() => browser.theme.getCurrent())
          .then(themeChanged)
      } else {
        browser.theme.update(themes[themeId].firefoxTheme)
      }
    },
  }
}

// Because WebExtensions don't know the name of a current theme, we're just matching three key values
function getOrGenerateTheme(theme: Theme) {
  if (theme.colors === null) {
    return {
      id: 'auto',
      ...themes.auto,
    }
  }
  const newtTheme = Object.entries(themes).find(([style, newtTheme]) => {
    const keys = newtTheme.matchKeys
    if (keys) {
      return !Object.entries(keys).some(([key, value]) => theme.colors[key] !== value)
    }
  })

  if (newtTheme) {
    return {
      id: newtTheme[0],
      ...newtTheme[1],
    }
  } else
    return {
      id: 'unknown',
      ...themes.unknown,
    }
}

export default createBackground()
