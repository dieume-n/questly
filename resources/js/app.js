require('./bootstrap');

import VueRouter from "vue-router";
import router from "./routes";
import MainApp from "./MainApp";
import moment from "moment";
import Vuelidate from 'vuelidate';
import { BootstrapVue } from 'bootstrap-vue'

import store from "./store"

require('./store/subscriber');

window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);

Vue.filter('fromNow', value => moment(value).fromNow());
Vue.filter('calendar', value => moment(value).format("MM/DD/YYYY"));
Vue.filter('excerpt', value => value.substr(0, 150) + "...");

store.dispatch('auth/attempt', localStorage.getItem('token'));

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        MainApp
    }
});

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });