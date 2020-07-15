import VueRouter from "vue-router";
import store from './store/index';

import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SingUp";
import Home from "./components/Home";
import QuestionView from "./components/Question/QuestionView";
import CategoryQuestionsView from "./components/Question/CategoryQuestionsView";

// Middlewares
import guest from "./middleware/guest";
// import auth from "./middleware/guest";



const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignIn,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/categories/:slug/questions',
        name: 'category questions',
        component: CategoryQuestionsView
    },
    {
        path: '/questions/:slug',
        name: 'question',
        component: QuestionView
    },

];


const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    console.log(middleware)

    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context
    })
});


export default router;