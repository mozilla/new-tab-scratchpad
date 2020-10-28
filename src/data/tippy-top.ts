import cachedFetch from '../cachedFetch'
const MANIFEST_URL = 'https://activity-stream-icons.services.mozilla.com/v1/icons.json'

interface TippyTopItem {
  domains: string[]
  image_url: string
}

// The tippy top manifest maps multiple domains to one icon,
// we're splitting that up into a 1-1 relationship in a Map
export default (function () {
  const iconMap = new Map()
  cachedFetch(MANIFEST_URL, {
    expiryTime: 24
  })
    .then((items: TippyTopItem[]) => items
      .forEach(({
        image_url,
        domains
      }) => domains
        .forEach(domain => iconMap
          .set(domain, image_url))))

  return iconMap
})()
