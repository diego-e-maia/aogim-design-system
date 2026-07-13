export interface NavItem {
  title: string;
  href: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface FooterSections {
  product: { title: string; items: NavItem[] };
  resources: { title: string; items: NavItem[] };
  community: { title: string; items: NavItem[] };
  company: { title: string; items: NavItem[] };
}

export interface Translations {
  nav: NavSection[];
  footer: FooterSections;
  search: string;
  searchNoResults: string;
  menuOpen: string;
  menuClose: string;
  hero: {
    title: string;
    description: string;
    start: string;
    components: string;
  };
  sections: {
    fundamentals: string;
    fundamentalsDesc: string;
    components: string;
    componentsDesc: string;
    resources: string;
    resourcesDesc: string;
    overview: string;
  };
  toc: string;
  readMore: string;
  download: string;
  comingSoon: string;
}

export const translations: Record<string, Translations> = {
  pt: {
    search: 'Pesquisar documentação...',
    searchNoResults: 'Nenhum resultado encontrado',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    toc: 'Nesta página',
    readMore: 'Ler mais →',
    download: 'Download',
    comingSoon: 'Em breve',
    hero: {
      title: 'AOGIM Design System',
      description: 'Uma Igreja. Uma Família. Um Lugar de Transformação.',
      start: 'Começar',
      components: 'Componentes',
    },
    sections: {
      fundamentals: 'Fundamentos',
      fundamentalsDesc: 'Os pilares do nosso sistema de design.',
      components: 'Componentes',
      componentsDesc: 'Elementos reutilizáveis para construir interfaces consistentes.',
      resources: 'Recursos',
      resourcesDesc: 'Ferramentas e materiais para a equipe.',
      overview: 'Visão Geral',
    },
    nav: [
      {
        title: 'Fundamentos',
        items: [
          { title: 'Visão Geral', href: '/fundamentos' },
          { title: 'Marca', href: '/fundamentos/marca' },
          { title: 'Cores', href: '/fundamentos/cores' },
          { title: 'Tipografia', href: '/fundamentos/tipografia' },
          { title: 'Fotografia', href: '/fundamentos/fotografia' },
          { title: 'Espaçamentos', href: '/fundamentos/espacamentos' },
          { title: 'Ícones', href: '/fundamentos/icones' },
        ],
      },
      {
        title: 'Componentes',
        items: [
          { title: 'Visão Geral', href: '/componentes' },
          { title: 'Botões', href: '/componentes/botoes' },
          { title: 'Cards', href: '/componentes/cards' },
          { title: 'Callouts', href: '/componentes/callouts' },
          { title: 'Badges', href: '/componentes/badges' },
          { title: 'Formulários', href: '/componentes/formularios' },
          { title: 'Modais', href: '/componentes/modais' },
          { title: 'Accordion', href: '/componentes/accordion' },
          { title: 'Tabs', href: '/componentes/tabs' },
          { title: 'Tooltip', href: '/componentes/tooltip' },
        ],
      },
      {
        title: 'Templates',
        items: [
          { title: 'Visão Geral', href: '/templates' },
          { title: 'Páginas', href: '/templates/paginas' },
          { title: 'Posts', href: '/templates/posts' },
          { title: 'Eventos', href: '/templates/eventos' },
        ],
      },
      {
        title: 'Guias',
        items: [
          { title: 'Primeiros Passos', href: '/guias/primeiros-passos' },
          { title: 'Usando Componentes', href: '/guias/usando-componentes' },
          { title: 'Guia da Marca', href: '/guias/guia-marca' },
          { title: 'Configurar Holyrics', href: '/guias/configurar-holyrics' },
          { title: 'Configurar OBS', href: '/guias/configurar-obs' },
        ],
      },
      {
        title: 'Recursos',
        items: [
          { title: 'Holyrics', href: '/recursos/holyrics' },
          { title: 'OBS', href: '/recursos/obs' },
          { title: 'Biblioteca', href: '/recursos/biblioteca' },
          { title: 'Downloads', href: '/recursos/downloads' },
        ],
      },
    ],
    footer: {
      product: {
        title: 'Produto',
        items: [
          { title: 'GitHub', href: 'https://github.com/aogim/design-system' },
          { title: 'Changelog', href: '/changelog' },
        ],
      },
      resources: {
        title: 'Recursos',
        items: [
          { title: 'Documentação', href: '/docs' },
          { title: 'Guia de Início', href: '/guia-de-inicio' },
          { title: 'Exemplos', href: '/exemplos' },
        ],
      },
      community: {
        title: 'Comunidade',
        items: [
          { title: 'Discord', href: '#' },
          { title: 'GitHub', href: 'https://github.com/aogim' },
        ],
      },
      company: {
        title: 'Empresa',
        items: [
          { title: 'Sobre', href: '/sobre' },
          { title: 'Contato', href: '/contato' },
          { title: 'Privacidade', href: '/privacidade' },
        ],
      },
    },
  },
  en: {
    search: 'Search documentation...',
    searchNoResults: 'No results found',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    toc: 'On this page',
    readMore: 'Read more →',
    download: 'Download',
    comingSoon: 'Coming soon',
    hero: {
      title: 'AOGIM Design System',
      description: 'One Church. One Family. One Place of Transformation.',
      start: 'Get Started',
      components: 'Components',
    },
    sections: {
      fundamentals: 'Fundamentals',
      fundamentalsDesc: 'The pillars of our design system.',
      components: 'Components',
      componentsDesc: 'Reusable elements to build consistent interfaces.',
      resources: 'Resources',
      resourcesDesc: 'Tools and materials for the team.',
      overview: 'Overview',
    },
    nav: [
      {
        title: 'Fundamentals',
        items: [
          { title: 'Overview', href: '/fundamentos' },
          { title: 'Brand', href: '/fundamentos/marca' },
          { title: 'Colors', href: '/fundamentos/cores' },
          { title: 'Typography', href: '/fundamentos/tipografia' },
          { title: 'Photography', href: '/fundamentos/fotografia' },
          { title: 'Spacing', href: '/fundamentos/espacamentos' },
          { title: 'Icons', href: '/fundamentos/icones' },
        ],
      },
      {
        title: 'Components',
        items: [
          { title: 'Overview', href: '/componentes' },
          { title: 'Buttons', href: '/componentes/botoes' },
          { title: 'Cards', href: '/componentes/cards' },
          { title: 'Callouts', href: '/componentes/callouts' },
          { title: 'Badges', href: '/componentes/badges' },
          { title: 'Forms', href: '/componentes/formularios' },
          { title: 'Modals', href: '/componentes/modais' },
          { title: 'Accordion', href: '/componentes/accordion' },
          { title: 'Tabs', href: '/componentes/tabs' },
          { title: 'Tooltip', href: '/componentes/tooltip' },
        ],
      },
      {
        title: 'Templates',
        items: [
          { title: 'Overview', href: '/templates' },
          { title: 'Pages', href: '/templates/paginas' },
          { title: 'Posts', href: '/templates/posts' },
          { title: 'Events', href: '/templates/eventos' },
        ],
      },
      {
        title: 'Guides',
        items: [
          { title: 'Getting Started', href: '/guias/primeiros-passos' },
          { title: 'Using Components', href: '/guias/usando-componentes' },
          { title: 'Brand Guide', href: '/guias/guia-marca' },
          { title: 'Holyrics Setup', href: '/guias/configurar-holyrics' },
          { title: 'OBS Setup', href: '/guias/configurar-obs' },
        ],
      },
      {
        title: 'Resources',
        items: [
          { title: 'Holyrics', href: '/recursos/holyrics' },
          { title: 'OBS', href: '/recursos/obs' },
          { title: 'Library', href: '/recursos/biblioteca' },
          { title: 'Downloads', href: '/recursos/downloads' },
        ],
      },
    ],
    footer: {
      product: {
        title: 'Product',
        items: [
          { title: 'GitHub', href: 'https://github.com/aogim/design-system' },
          { title: 'Changelog', href: '/changelog' },
        ],
      },
      resources: {
        title: 'Resources',
        items: [
          { title: 'Documentation', href: '/docs' },
          { title: 'Getting Started', href: '/guia-de-inicio' },
          { title: 'Examples', href: '/exemplos' },
        ],
      },
      community: {
        title: 'Community',
        items: [
          { title: 'Discord', href: '#' },
          { title: 'GitHub', href: 'https://github.com/aogim' },
        ],
      },
      company: {
        title: 'Company',
        items: [
          { title: 'About', href: '/sobre' },
          { title: 'Contact', href: '/contato' },
          { title: 'Privacy', href: '/privacidade' },
        ],
      },
    },
  },
  es: {
    search: 'Buscar documentación...',
    searchNoResults: 'Sin resultados',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    toc: 'En esta página',
    readMore: 'Leer más →',
    download: 'Descargar',
    comingSoon: 'Próximamente',
    hero: {
      title: 'AOGIM Design System',
      description: 'Una Iglesia. Una Familia. Un Lugar de Transformación.',
      start: 'Comenzar',
      components: 'Componentes',
    },
    sections: {
      fundamentals: 'Fundamentos',
      fundamentalsDesc: 'Los pilares de nuestro sistema de diseño.',
      components: 'Componentes',
      componentsDesc: 'Elementos reutilizables para construir interfaces consistentes.',
      resources: 'Recursos',
      resourcesDesc: 'Herramientas y materiales para el equipo.',
      overview: 'Visión General',
    },
    nav: [
      {
        title: 'Fundamentos',
        items: [
          { title: 'Visión General', href: '/fundamentos' },
          { title: 'Marca', href: '/fundamentos/marca' },
          { title: 'Colores', href: '/fundamentos/cores' },
          { title: 'Tipografía', href: '/fundamentos/tipografia' },
          { title: 'Fotografía', href: '/fundamentos/fotografia' },
          { title: 'Espaciados', href: '/fundamentos/espacamentos' },
          { title: 'Iconos', href: '/fundamentos/icones' },
        ],
      },
      {
        title: 'Componentes',
        items: [
          { title: 'Visión General', href: '/componentes' },
          { title: 'Botones', href: '/componentes/botoes' },
          { title: 'Tarjetas', href: '/componentes/cards' },
          { title: 'Callouts', href: '/componentes/callouts' },
          { title: 'Insignias', href: '/componentes/badges' },
          { title: 'Formularios', href: '/componentes/formularios' },
          { title: 'Modales', href: '/componentes/modais' },
          { title: 'Acordeón', href: '/componentes/accordion' },
          { title: 'Pestañas', href: '/componentes/tabs' },
          { title: 'Tooltip', href: '/componentes/tooltip' },
        ],
      },
      {
        title: 'Plantillas',
        items: [
          { title: 'Visión General', href: '/templates' },
          { title: 'Páginas', href: '/templates/paginas' },
          { title: 'Publicaciones', href: '/templates/posts' },
          { title: 'Eventos', href: '/templates/eventos' },
        ],
      },
      {
        title: 'Guías',
        items: [
          { title: 'Primeros Pasos', href: '/guias/primeiros-passos' },
          { title: 'Usando Componentes', href: '/guias/usando-componentes' },
          { title: 'Guía de Marca', href: '/guias/guia-marca' },
          { title: 'Configurar Holyrics', href: '/guias/configurar-holyrics' },
          { title: 'Configurar OBS', href: '/guias/configurar-obs' },
        ],
      },
      {
        title: 'Recursos',
        items: [
          { title: 'Holyrics', href: '/recursos/holyrics' },
          { title: 'OBS', href: '/recursos/obs' },
          { title: 'Biblioteca', href: '/recursos/biblioteca' },
          { title: 'Descargas', href: '/recursos/downloads' },
        ],
      },
    ],
    footer: {
      product: {
        title: 'Producto',
        items: [
          { title: 'GitHub', href: 'https://github.com/aogim/design-system' },
          { title: 'Changelog', href: '/changelog' },
        ],
      },
      resources: {
        title: 'Recursos',
        items: [
          { title: 'Documentación', href: '/docs' },
          { title: 'Guía de Inicio', href: '/guia-de-inicio' },
          { title: 'Ejemplos', href: '/exemplos' },
        ],
      },
      community: {
        title: 'Comunidad',
        items: [
          { title: 'Discord', href: '#' },
          { title: 'GitHub', href: 'https://github.com/aogim' },
        ],
      },
      company: {
        title: 'Empresa',
        items: [
          { title: 'Acerca de', href: '/sobre' },
          { title: 'Contacto', href: '/contato' },
          { title: 'Privacidad', href: '/privacidade' },
        ],
      },
    },
  },
};
