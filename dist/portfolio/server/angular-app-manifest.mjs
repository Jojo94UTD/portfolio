
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/accueil"
  },
  {
    "renderMode": 2,
    "route": "/enedis"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9442, hash: 'f20814329c40837391659c2adeea29bde5630cdfd01d7bdd6aa79b66b7c49219', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9798, hash: '9b83d1208b48348c61225a7e6bcea9a5f5c315ed49cc9a7be16fa02ff87df94d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21736, hash: 'd0dfe115b16a8a9b56e228db9aa8ad3c3ec1fe6f02804cae8a525ab3240ba3f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'accueil/index.html': {size: 21736, hash: 'd0dfe115b16a8a9b56e228db9aa8ad3c3ec1fe6f02804cae8a525ab3240ba3f8', text: () => import('./assets-chunks/accueil_index_html.mjs').then(m => m.default)},
    'enedis/index.html': {size: 16618, hash: '543233b055f66e937cd254de71cf117b4b2f71d87ba909a385900774bfc822c6', text: () => import('./assets-chunks/enedis_index_html.mjs').then(m => m.default)},
    'styles-3M5NMCC2.css': {size: 32, hash: 'UDqEmAbNj70', text: () => import('./assets-chunks/styles-3M5NMCC2_css.mjs').then(m => m.default)}
  },
};
