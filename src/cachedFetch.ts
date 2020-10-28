import objectHash from 'object-hash'

interface CacheObject {
  response: any
  expiry: number
  time: number
}

// cachedFetch is a makeshift wrapper around fetch, that caches json responses.
// It's intended to be used with pocket and tippy-top
export default (function () {
  let cacheMap: null | Map<string, CacheObject> = null

  return async function (url: string, options?): Promise<any> {
    // Default expiry time is 4 hours
    let expiryTime = 4

    if (options && options.expiryTime !== undefined) {
      expiryTime = options.expiryTime
      delete options.expiryTime
    }

    // If we haven't fetched the cache from storage, we do this now
    if (cacheMap == null) {
      const res = await browser.storage.local.get('cacheData')
      if (res.cacheData) {
        // Remove all entries that exceed their expiration date.
        const timestamp = new Date().getTime()
        const filteredData = (res.cacheData as any).filter(
          ([, value]: [any, CacheObject]) => value.time > (timestamp - value.expiry * 60 * 60 * 1000)
        )
        cacheMap = new Map(filteredData)

        // If we filtered something, update the storage
        if (filteredData.length < (res.cacheData as any).length) {
          await browser.storage.local.set({
            cacheData: Array.from(cacheMap) as any
          })
        }
      } else {
        cacheMap = new Map()
      }
    }

    // Create a unique hash from the arguments
    const hash: string = objectHash({ url, options })

    // Check if we hit something in the cache
    const cachedEntry = cacheMap.get(hash)
    if (cachedEntry) {
      return cachedEntry.response
    }

    // Nothing in the cache, so let's fetch for real
    const response = await fetch(url, options)
    const json = await response.json()

    // Save result in the cache
    cacheMap.set(hash, {
      response: json,
      expiry: expiryTime,
      time: new Date().getTime(),
    })
    // Update storage with latest cache
    browser.storage.local.set({
      cacheData: Array.from(cacheMap) as any
    })

    return json
  }
})()
