import { Obj, currentSiteId, getInstanceId, load, navigateTo } from 'scrivito'
import { isMultitenancyEnabled } from './scrivitoTenants'

const location = typeof window !== 'undefined' ? window.location : undefined

const NEOLETTER_MAILINGS_SITE_ID = 'mailing-app'

export function baseUrlForSite(siteId: string): string | undefined {
  if (siteId === NEOLETTER_MAILINGS_SITE_ID) {
    return `https://mailing.neoletter.com/${getInstanceId()}`
  }

  const siteRoot = Obj.onSite(siteId).root()
  if (!siteRoot) return

  const baseAppUrl = getBaseAppUrl()
  if (!baseAppUrl) return

  const language = siteRoot.language()
  if (!language) return

  return `${baseAppUrl}/${language}`
}

export function siteForUrl(
  url: string,
): { baseUrl: string; siteId: string } | undefined {
  const neoletterBaseUrl = `https://mailing.neoletter.com/${getInstanceId()}`
  if (url.startsWith(neoletterBaseUrl)) {
    return { baseUrl: neoletterBaseUrl, siteId: NEOLETTER_MAILINGS_SITE_ID }
  }

  const baseAppUrl = getBaseAppUrl()
  if (!baseAppUrl) return

  const regex = new RegExp(`^${baseAppUrl}\\/(?<lang>[a-z]{2})([?/]|$)`)
  const language = regex.exec(url)?.groups?.lang
  if (!language) return

  const languageSite = allWebsites()
    .and('_language', 'equals', language)
    .first()
  if (!languageSite) return

  const languageSiteId = languageSite.siteId()
  if (!languageSiteId) return

  return { baseUrl: `${baseAppUrl}/${language}`, siteId: languageSiteId }
}

export async function ensureSiteIsPresent() {
  if ((await load(currentSiteId)) === null) {
    navigateTo(() => {
      const websites = allWebsites().toArray()
      const preferredLanguageOrder = [...window.navigator.languages, 'en', null]

      for (const language of preferredLanguageOrder) {
        const site = websites.find((site) => siteHasLanguage(site, language))
        if (site) return site
      }

      return websites[0] || null
    })
  }
}

function getBaseAppUrl(): string | undefined {
  if (!location) return

  return isMultitenancyEnabled()
    ? `${location.origin}/${getInstanceId()}`
    : location.origin
}

function allWebsites() {
  return Obj.onAllSites()
    .where('_path', 'equals', '/')
    .andNot('_siteId', 'equals', NEOLETTER_MAILINGS_SITE_ID)
}

function siteHasLanguage(site: Obj, language: string | null) {
  const siteLanguage = site.language()
  return language && siteLanguage
    ? language.startsWith(siteLanguage)
    : language === siteLanguage
}
