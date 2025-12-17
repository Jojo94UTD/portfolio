
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/accueil",
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
    "redirectTo": "/accueil",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9442, hash: 'f13fd81db4f588c589096a39414f73c6e1f951081deb8bf5b1f366a2c0e08387', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 9798, hash: 'ba87d650449895eea6b4159124d39ec09c7aed06b8f6213f95fd5cc58e7ab3b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'enedis/index.html': {size: 16618, hash: '3e145265d446b935dfd484037eeebddbedbcaa2736c4aaac04073bd9c180f681', text: () => import('./assets-chunks/enedis_index_html.mjs').then(m => m.default)},
    'accueil/index.html': {size: 21736, hash: '522cffadb0f2b5d7c7077a9ae282a3e1c72c46e73463087168c0822a369189d7', text: () => import('./assets-chunks/accueil_index_html.mjs').then(m => m.default)},
    'styles-3M5NMCC2.css': {size: 32, hash: 'UDqEmAbNj70', text: () => import('./assets-chunks/styles-3M5NMCC2_css.mjs').then(m => m.default)}
  },
};
