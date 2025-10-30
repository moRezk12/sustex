
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
    'index.csr.html': {size: 4153, hash: 'e7c24481c0b9544f2dacd0afe677e7fe53d37f0480520430b255a1573ab330c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1163, hash: '20b08648fe0fc3d87c25ba288ee81fbfabfaf7f555e7725d1deee177d69606c1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10745, hash: '26c67d7d70323b52e39cf5ea974199ea12b127bce6bef5b84d9b846058f5046a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-RYLA7LMA.css': {size: 8814, hash: 'lBRKfG3PxnQ', text: () => import('./assets-chunks/styles-RYLA7LMA_css.mjs').then(m => m.default)}
  },
};
