
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'workout-tracker',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/workout-tracker"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23633, hash: '25e5a41bf5ce22e87aabd13c81c1160125a0a4f6c4ec80b8351c736251611103', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17207, hash: '547798aa7d2829c339866324052edbac7b686e725341d2003e6f99484fa9c058', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 91456, hash: 'c4894541c9b85c4935ed8894645a81acd7a8a61d308ad2247f86ac2e78891fd9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KPYHBHZ6.css': {size: 7035, hash: 'jxCccDkc1VE', text: () => import('./assets-chunks/styles-KPYHBHZ6_css.mjs').then(m => m.default)}
  },
};
