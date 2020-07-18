import VueRouter from "vue-router";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SingUp";
import Home from "./components/Home";
import QuestionView from "./components/Question/QuestionView";
import CategoryQuestionsView from "./components/Question/CategoryQuestionsView";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
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


export default router;