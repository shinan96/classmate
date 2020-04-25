import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/index'
import mock from '@/mock/index'
Vue.config.productionTip = false
Vue.use(ElementUI);
// window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
