import { getRelativeLocaleUrl } from 'astro:i18n'
import { nonDefaultLocales } from '../i18n/locales'

function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') return '/'
  const normalized = pathname.replace(/\/+$/, '')
  return normalized.startsWith('/') ? normalized : `/${normalized}`
}

function splitPath(path: string) {
  const match = path.match(/^([^?#]*)(.*)$/)
  return {
    pathname: match?.[1] || '/',
    suffix: match?.[2] || '',
  }
}

export function stripLocalePrefix(pathname: string) {
  const normalizedPathname = normalizePathname(pathname)
  // Compare case-insensitively: locale codes can be capitalized (e.g. `pt-BR`)
  // while the URL path segment is always lowercase (e.g. `/pt-br/`).
  const lowerPathname = normalizedPathname.toLowerCase()

  for (const locale of nonDefaultLocales) {
    const lowerLocale = locale.toLowerCase()
    if (lowerPathname === `/${lowerLocale}`) return '/'
    if (lowerPathname.startsWith(`/${lowerLocale}/`)) {
      return normalizePathname(normalizedPathname.slice(locale.length + 1))
    }
  }

  return normalizedPathname
}

export function getAlternateLocaleHref(
  currentPathname: string,
  targetLocale: string,
) {
  const { pathname, suffix } = splitPath(currentPathname)
  return `${getRelativeLocaleUrl(targetLocale, stripLocalePrefix(pathname))}${suffix}`
}
