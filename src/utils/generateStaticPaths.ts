import { defaultLocale, locales } from '../i18n/locales'

export default function generateStaticPaths() {
  return locales.map((locale) => {
    const lang = locale === defaultLocale ? undefined : locale.toLowerCase()
    return {
      params: { lang },
      props: { locale },
    }
  })
}
