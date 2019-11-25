import Vue from 'vue'
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import Framework from './Framework';

Vue.config.productionTip = false

let app = null;

function render({ appContent, loading }) {

  if (!app) {
    app = new Vue({
      el: '#my-app',
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });

// support custom fetch see: https://github.com/kuitos/import-html-entry/blob/91d542e936a74408c6c8cd1c9eebc5a9f83a8dc0/src/index.js#L163
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

registerMicroApps(
  [
    { name: 'vuecli', entry: '//localhost:9001', render, activeRule: genActiveRule('/vuecli') },
    { name: 'creatreactapp', entry: '//localhost:9002', render, activeRule: genActiveRule('/creatreactapp') },
    { name: 'ejectreact', entry: '//localhost:9003', render, activeRule: genActiveRule('/ejectreact') },
    { name: 'reactwebpack', entry: '//localhost:9004', render, activeRule: genActiveRule('/reactwebpack') },
  ],
  {
    beforeLoad: [
      app => {
        window.console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        window.console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        window.console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

setDefaultMountApp('/creatreactapp');
runAfterFirstMounted(() => window.console.info('first app mounted'));

start({ prefetch: true, fetch: request });
