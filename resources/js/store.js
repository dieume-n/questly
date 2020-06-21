export default {
    state: {
        welcomeMessage: "Welcome to our app"
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
}