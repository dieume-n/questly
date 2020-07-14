
export default {
    namespaced: true,

    state: {
        paginationUrl: null,
        questions: [],
        pagination: null,
        currentQuestions: null
    },

    getters: {
        getQuestions(state) {
            return state.questions;
        },
        getPagination(state) {
            return state.pagination;
        },
        getCurrentQuestion(state) {
            return state.currentQuestions
        },
        getPaginationUrl(state) {
            return state.paginationUrl;
        }

    },

    mutations: {
        SET_QUESTIONS(state, data) {
            state.questions = data;
        },
        SET_PAGINATION(state, data) {
            state.pagination = data
        },
        SET_PAGINATION_URL(state, data) {
            state.paginationUrl = data;
        },
        UPDATE_QUESTIONS(state, data) {
            state.questions = data;
        },
        UPDATE_PAGINATION(state, data) {
            state.pagination = data;
        },
        SET_CURRENT_QUESTION(state, data) {
            state.currentQuestions = data;
        },
        SET_QUESTIONS_BY_CATEGORY(state, data) {
            state.questions = data;
        }
    },

    actions: {
        setPaginationUrl({ commit }, url) {
            commit('SET_PAGINATION_URL', url);
        },
        async fetchQuestions({ commit }, url) {
            let response = await axios.get(url);
            commit('SET_QUESTIONS', response.data.data);

            commit('SET_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        },
        async fetchPaginated({ commit }, { url, page }) {
            let response = await axios.get(`${url}?page=${page}`)
            commit('UPDATE_QUESTIONS', response.data.data);
            commit('UPDATE_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        },
        async fetchQuestion({ commit, dispatch }, slug) {
            let response = await axios.get(`/api/questions/${slug}`);
            commit('SET_CURRENT_QUESTION', response.data.data);
            dispatch('replies/fetchAllReplies', response.data.data.slug, { root: true });
        },

    }
}