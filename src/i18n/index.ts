import type { Translations } from './translations';
import { translations } from './translations';

export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export function getTranslations(locale: string): Translations {
  return translations[locale] || translations.pt;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDefaultLocale(): Locale {
  return 'pt';
}
