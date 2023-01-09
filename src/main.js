import Vue from 'vue'
import App from './App.vue'
import "./assets/css/index.scss";
import http from "./assets/js/http.js";
import unit from "./assets/js/unit.js";
Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$unit = unit;
new Vue({
  render: h => h(App),
}).$mount('#app')
