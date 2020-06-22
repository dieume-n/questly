import VueRouter from "vue-router";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SingUp";

const routes = [
    {
        path: "/",
        name: "home"
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    }
];


const router = new VueRouter({
    routes,
    mode: 'history'
});


export default router;