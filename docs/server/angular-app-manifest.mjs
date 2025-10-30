
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sustex/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/sustex"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3723, hash: '06b6f8bd8e153e98071c92b6449d2eb0bce8057d33bd167f3a68fe4d244d3ade', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: 'ca3915237c021fa6fa5bf551b85fe41b1ec936a554312bf3e4e83cbe677fcddd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7668, hash: '12177b724a261a95b26a30e2ec68ed6d73b5cc3235cb27e22d17f873b602cba2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CAHJKDRG.css': {size: 7374, hash: 'gfHnXDsWfTc', text: () => import('./assets-chunks/styles-CAHJKDRG_css.mjs').then(m => m.default)}
  },
};
