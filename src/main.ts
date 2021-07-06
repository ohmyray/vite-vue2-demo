import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.config.productionTip = true;
Vue.config.performance = true;

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// window.store = store;

// setTimeout(() => {
//   console.log('[main]', app, store.state);
// }, 1000);
