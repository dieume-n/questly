
export default {
    namespaced: true,

    state: {
        categories: []
    },

    getters: {
        allCategories(state) {
            return state.categories;
        },

    },

    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data;
        }
    },

    actions: {
        async fetchCategories({ commit }) {
            let response = await axios.get('/api/categories')
            commit('SET_CATEGORIES', response.data.data);
        },
    }
}