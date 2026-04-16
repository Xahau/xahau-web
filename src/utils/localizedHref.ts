import { getRelativeLocaleUrl } from 'astro:i18n'

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

  for (const locale of ['es', 'ja'] as const) {
    if (normalizedPathname === `/${locale}`) return '/'
    if (normalizedPathname.startsWith(`/${locale}/`)) {
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
