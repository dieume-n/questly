import VueRouter from "vue-router";

import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import CreateQuestion from "./Pages/Questions/CreateQuestion";
import ViewQuestion from "./Pages/Questions/ViewQuestion";
import EditQuestion from "./Pages/Questions/EditQuestion";

import CategoryQuestions from "./Pages/Categories/CategoryQuestions";

import store from "./store";

// Middlewares
import guest from "./middleware/guest";
import auth from "./middleware/auth";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '/categories/:slug/questions',
        name: 'categoryQuestions',
        component: CategoryQuestions
    },
    {
        path: '/questions',
        name: 'createQuestion',
        component: CreateQuestion,
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/questions/:slug',
        name: 'viewQuestion',
        component: ViewQuestion
    },
    {
        path: '/questions/:slug/edit',
        name: 'editQuestion',
        component: EditQuestion
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