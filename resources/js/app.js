require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";
import MainApp from "./MainApp";
import moment from "moment";

import store from "./store"

require('./store/subscriber');

window.Vue = require('vue');

Vue.use(VueRouter);

Vue.filter('fromNow', value => moment(value).fromNow());
Vue.filter('excerpt', value => value.substr(0, 60) + "...");

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
