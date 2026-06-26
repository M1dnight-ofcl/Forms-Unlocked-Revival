# todo
- (DONE) move to wxt - [ref](https://wxt.dev/guide/installation.html)
  - (DONE) use typescript - [ref](https://wxt.dev/guide/essentials/config/typescript.html)
  - libraries
    - (DONE) use react for component state system
    - (DONE) use scss for styling - [ref](https://www.google.com/search?q=using+scss+with+a+chroem+extension+content+script&rlz=1CADTIH_enUS1220&oq=using+scss+with+a+chroem+extension+content+script&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhAMgYIAhBFGEDSAQg4MjQ1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8&safe=active&ssui=on)
    - add fontawesome icons
    - (DONE) use motion for animation
    - use base ui for functionality
  - (DONE) try migrating to manifest v3
    - (DONE) properly implement background scripts with communication from content script
    - (DONE) inject react dom using entrypoint
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
export default defineContentScript({
  matches:[
    "https://docs.google.com/forms/u*",
    "https://docs.google.com/forms/d/e*",
    "https://chat.openai.com/*"
  ],
  main(ctx){
    const $root=$('<div id="fur-mount"></div>');
    $('body').append($root);
    const root=ReactDOM.createRoot($root[0]);
    root.render(<React.StrictMode>
      <MyInjectedUI/>
    </React.StrictMode>);
    ctx.onInvalidated(() => {
      root.unmount();
      container.remove();
    });
  },
});
```
  - use webfuse proxy to access blocked iframe links
    - add shortcuts to chatgpt, etc
  - Add custom tab system (from react)
    - use jotai