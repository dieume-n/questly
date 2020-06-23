
export default {
    namespaced: true,

    state: {
        questions: [],
        pagination: null
    },

    getters: {
        allQuestions(state) {
            return state.questions;
        },
        getPagination(state) {
            return state.pagination;
        }

    },

    mutations: {
        SET_QUESTIONS(state, data) {
            state.questions = data;
        },
        SET_PAGINATION(state, data) {
            state.pagination = data
        },
        UPDATE_QUESTIONS(state, data) {
            state.questions = data;
        },
        UPDATE_PAGINATION(state, data) {
            state.pagination = data
        }
    },

    actions: {
        async fetchAllQuestions({ commit }) {
            let response = await axios.get('/api/questions')
            commit('SET_QUESTIONS', response.data.data);
            commit('SET_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        },
        async fetchPaginated({ commit }, page) {
            let response = await axios.get(`/api/questions?page=${page}`)
            commit('UPDATE_QUESTIONS', response.data.data);
            commit('UPDATE_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        }

    }
}