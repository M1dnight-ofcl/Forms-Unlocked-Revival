import { defineConfig } from 'wxt';
export default defineConfig({
  manifest:{
    name: 'Browser Safety',
    short_name: 'Browser Safety',
    description: 'Browser Safety',
    version: '1.0.0',
    author:{email:'Anonymous'},
    offline_enabled: true,
    incognito: 'split',
    kiosk_enabled: true,
    permissions:['activeTab','tabs','contextMenus'],
    icons:{
      16: 'images/icon16.png',
      32: 'images/icon32.png',
      48: 'images/icon48.png',
      128: 'images/icon128.png',
    },
  },
  browser: 'chrome',
});