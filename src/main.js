import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/*
*   style
* */
import './assets/styles/index.scss';
/*
*   external lib
* */
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

/*
*   自动加载svg文件
* */

Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
