import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Tinybox from "vue-tinybox";

Vue.use(require('vue-moment'));
Vue.use(Tinybox);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')