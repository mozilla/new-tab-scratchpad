import { writable } from 'svelte/store'

interface TopSite {
  id: string
  name: string
  url: string
  pinned?: boolean
  sponsored?: boolean
  favicon?: string
}

const PINNED_KEY = 'pinnedSites'
const DEFAULT: TopSite[] = [
  {
    id: 'google.com',
    name: 'Google',
    url: 'https://www.google.com/search?client=firefox-b-d',
    sponsored: true,
  }, {
    id: 'amazon.com',
    name: 'Amazon',
    url: 'https://www.amazon.com/?sourceid=Mozilla-search&tag=mozilla-20',
    sponsored: true,
  }
]

function createBackground() {
  const { subscribe, set, update } = writable([] as TopSite[], () => {
    // Listen for changes to storage
    const changeHandler = changes => !changes[PINNED_KEY] || pinnedSitesChanged(changes[PINNED_KEY].newValue)
    browser.storage.onChanged.addListener(changeHandler)
    return () => {
      browser.storage.onChanged.removeListener(changeHandler)
    }
  })

  const pinnedSitesChanged = async pinned => {
    const topSites = await getTopSites()
    set(createMergedList(pinned, topSites))
  }

  browser.storage.local.get(PINNED_KEY).then((res) => pinnedSitesChanged((res[PINNED_KEY] as any) || DEFAULT))

  return {
    subscribe,
    set(arr: TopSite[]) {
      const newPinned = arr.filter(item => item.pinned)
      const obj = {}
      obj[PINNED_KEY] = newPinned
      browser.storage.local.set(obj)
    },
  }
}

/**
 * Fetches top sites from browser and converts them to TopSite format
 * @return {Promise<TopSite[]>} Array of browsers TopSites
 */
async function getTopSites(): Promise<TopSite[]> {
  const nativeSites: browser.topSites.MostVisitedURL[] = await (browser.topSites as any).get({ includeFavicon: true, limit: 32 })
  return nativeSites.map(native => {
    const host = (new URL(native.url)).host
    return {
      id: host,
      name: host,
      url: native.url,
      favicon: (native as any).favicon,
    }
  })
}

/**
 * Removes sites from browser top-sites that are already in the pinned array,
 * then merges both arrays and sets the pinned value accordingly.
 * @param {TopSite[]} pinned   array of pinned TopSites
 * @param {TopSite[]} topSites array of browsers TopSites
 */
function createMergedList(pinned: TopSite[], topSites: TopSite[]) {
  const filteredTopSites = topSites.filter(
    ts => !pinned.some(
      p => p.id === ts.id
    )
  )

  pinned.map(item => item.pinned = true)
  filteredTopSites.map(item => item.pinned = false)

  return [...pinned, ...filteredTopSites]
}

export default createBackground()
