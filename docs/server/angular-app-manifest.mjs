
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/sustex/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-UVZMT4SB.js"
    ],
    "route": "/sustex"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7721, hash: '7dd456bfaf61d1853ead322b611c0690112b9318dd15ddb0abbd3e6e40e6b89c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1061, hash: '6750230a40d50505e48cb5ac51971c3f85d840c981e5e0bade8243ee34f126b0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8455, hash: 'b15fe8c16251aabaa1cb5703946504f66782f3d134b0a75ac8d1703a3a66333a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ORANUATI.css': {size: 93223, hash: 'qvW/eugE/kk', text: () => import('./assets-chunks/styles-ORANUATI_css.mjs').then(m => m.default)}
  },
};
