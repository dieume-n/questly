import VueRouter from "vue-router";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SingUp";
// import Home from "./components/Home";
import QuestionView from "./components/Question/QuestionView";
import AskQuestion from "./components/Question/AskQuestion";
import EditQuestion from "./components/Question/EditQuestion";
import CategoryQuestionsView from "./components/Question/CategoryQuestionsView";

import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

import ViewQuestion from "./Pages/Questions/ViewQuestion";

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
        name: 'category questions',
        component: CategoryQuestionsView
    },
    {
        path: '/questions',
        name: 'ask question',
        component: AskQuestion,
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
        name: 'edit question',
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