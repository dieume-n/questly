require('./bootstrap');

// import Vuex from "vuex";
import VueRouter from "vue-router";
import router from "./routes";
import StoreData from "./store";
import MainApp from "./MainApp";

import store from "./store"

require('./store/subscriber');

window.Vue = require('vue');

Vue.use(VueRouter);
// Vue.use(Vuex);

// const store = new Vuex.Store(StoreData);
const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});
