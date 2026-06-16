export const locales = ['en', 'es', 'ja', 'pt-BR'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale = 'en'
export const nonDefaultLocales = locales.filter(
  (locale) => locale !== defaultLocale,
)
