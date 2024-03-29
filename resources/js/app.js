require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";
import MainApp from "./MainApp";
import moment from "moment";
import Vuelidate from 'vuelidate';
import { BootstrapVue } from 'bootstrap-vue';
import VueToast from 'vue-toast-notification';

import store from "./store"

require('./store/subscriber');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(VueToast, {
    position: 'top-right',
    duration: 3000
});

Vue.filter('fromNow', value => moment(value).fromNow());
Vue.filter('calendar', value => moment(value).format("MM/DD/YYYY"));
Vue.filter('excerpt', value => value.substr(0, 150) + "...");

store.dispatch('auth/attempt', localStorage.getItem('token'));
Vue.config.performance = true;
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
