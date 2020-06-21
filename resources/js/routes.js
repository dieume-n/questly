import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "home"
    },
    {
        path: 'login',
        name: 'login'
    },
    {
        path: 'signup',
        name: 'signup'
    }
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router;