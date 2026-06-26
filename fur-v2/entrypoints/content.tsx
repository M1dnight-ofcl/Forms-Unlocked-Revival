import { App } from './app/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
export default defineContentScript({
  matches:[
    "https://docs.google.com/forms/u*",
    "https://docs.google.com/forms/d/e*",
    "https://chat.openai.com/*"
  ],
  cssInjectionMode:'ui',
  main(ctx){
    const $root=$('<div id="fur-mount"></div>');
    $('body').append($root);
    const root=ReactDOM.createRoot($root[0]);
    root.render(<React.StrictMode>
      <App/>
    </React.StrictMode>);
    ctx.onInvalidated(()=>{root.unmount();$root.remove();});
  },
});