import { getCollection } from 'astro:content';

export async function GET() {
  const brandEntries = await getCollection('brand');
  const guideEntries = await getCollection('guides');

  const staticPages = [
    { title: 'Guias', description: 'Tutoriais e treinamento do design system', href: '/guias' },
    { title: 'Home', description: 'Página inicial do AOGIM Design System', href: '/' },
    { title: 'Fundamentos', description: 'Os pilares visuais e conceituais do sistema de design', href: '/fundamentos' },
    { title: 'Componentes', description: 'Elementos reutilizáveis para construir interfaces consistentes', href: '/componentes' },
    { title: 'Templates', description: 'Modelos prontos para páginas, posts e eventos', href: '/templates' },
    { title: 'Recursos', description: 'Ferramentas e materiais para a equipe', href: '/recursos' },
    { title: 'Botões', description: 'Componente de botão com múltiplas variantes e tamanhos', href: '/componentes/botoes' },
    { title: 'Cards', description: 'Containers versáteis para agrupar conteúdo', href: '/componentes/cards' },
    { title: 'Callouts', description: 'Alertas e notificações visuais com 4 variantes', href: '/componentes/callouts' },
    { title: 'Badges', description: 'Tags e indicadores de status em múltiplas cores', href: '/componentes/badges' },
    { title: 'Formulários', description: 'Inputs, selects e elementos de formulário padronizados', href: '/componentes/formularios' },
    { title: 'Modais', description: 'Diálogos e janelas modais para interações focadas', href: '/componentes/modais' },
    { title: 'Accordion', description: 'Seções colapsáveis com animação suave', href: '/componentes/accordion' },
    { title: 'Tabs', description: 'Navegação por abas com teclado', href: '/componentes/tabs' },
    { title: 'Tooltip', description: 'Dicas contextuais ao passar o mouse', href: '/componentes/tooltip' },
    { title: 'Páginas', description: 'Layouts de página para landing pages e páginas internas', href: '/templates/paginas' },
    { title: 'Posts', description: 'Templates para artigos e posts de blog', href: '/templates/posts' },
    { title: 'Eventos', description: 'Modelos para divulgação de eventos', href: '/templates/eventos' },
    { title: 'Holyrics', description: 'Templates e configurações para o software de apresentação', href: '/recursos/holyrics' },
    { title: 'OBS Studio', description: 'Overlays e configurações para transmissão ao vivo', href: '/recursos/obs' },
    { title: 'Biblioteca', description: 'Assets e recursos visuais para download', href: '/recursos/biblioteca' },
    { title: 'Downloads', description: 'Arquivos do design system para download', href: '/recursos/downloads' },
  ];

  const brandPages = brandEntries.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `/fundamentos/${entry.slug}`,
  }));

  const guidePages = guideEntries.map((entry) => ({
    title: entry.data.title,
    description: entry.data.description,
    href: `/guias/${entry.slug}`,
  }));

  const index = [...staticPages, ...brandPages, ...guidePages];

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
