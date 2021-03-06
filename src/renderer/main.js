import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-select/src/scss/vue-select.scss';
import "@/assets/scss/index.scss";
import "@/assets/scss/loaders.scss";

import * as Sentry from '@sentry/electron';
Sentry.init({
  dsn: 'https://2db185d22fdc4b5d844102a36714c0d1@sentry.io/1761306',
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    return event;
  }
});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')