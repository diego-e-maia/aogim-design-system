export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  badge?: string;
  children?: NavItem[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const mainNavigation: NavSection[] = [
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
];

export const footerNavigation = {
  product: [
    { title: 'GitHub', href: 'https://github.com/aogim/design-system' },
    { title: 'Changelog', href: '/changelog' },
  ],
  resources: [
    { title: 'Documentação', href: '/docs' },
    { title: 'Guia de Início', href: '/guia-de-inicio' },
    { title: 'Exemplos', href: '/exemplos' },
  ],
  community: [
    { title: 'Discord', href: '#' },
    { title: 'GitHub', href: 'https://github.com/aogim' },
  ],
  company: [
    { title: 'Sobre', href: '/sobre' },
    { title: 'Contato', href: '/contato' },
    { title: 'Privacidade', href: '/privacidade' },
  ],
};
