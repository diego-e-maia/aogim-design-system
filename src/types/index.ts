export type Language = 'pt' | 'en' | 'es';

export type Theme = 'light' | 'dark';

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  section?: string;
}
