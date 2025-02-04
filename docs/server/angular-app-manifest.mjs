
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/workout-tracker/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/workout-tracker"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23635, hash: '7591483eb1f8abee66b02edf961ccb4540f1b29a201187e7319152dd9be55e89', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17209, hash: '981947ace51628759cc85f4f7eac1d00cf28a08d6411a6b7ae4f97f460e5c437', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 91458, hash: '41ae08fc2587c38084086c44f7e296ccfe4e3315dbd878699f0cbf57feb4c402', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KPYHBHZ6.css': {size: 7035, hash: 'jxCccDkc1VE', text: () => import('./assets-chunks/styles-KPYHBHZ6_css.mjs').then(m => m.default)}
  },
};
