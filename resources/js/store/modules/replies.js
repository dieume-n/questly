
export default {
    namespaced: true,

    state: {
        replies: [],
        pagination: null,
    },

    getters: {
        allReplies(state) {
            return state.replies;
        },
        getPagination(state) {
            return state.pagination;
        }

    },

    mutations: {
        SET_REPLIES(state, data) {
            state.replies = data;
        },
        SET_PAGINATION(state, data) {
            state.pagination = data
        },
        UPDATE_REPLIES(state, data) {
            state.replies = data;
        },
        UPDATE_PAGINATION(state, data) {
            state.pagination = data;
        }
    },

    actions: {
        async fetchAllReplies({ commit }, question) {
            let response = await axios.get(`/api/questions/${question}/replies`)
            commit('SET_REPLIES', response.data.data);
            commit('SET_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        },
        async fetchPaginated({ commit }, { question, page }) {
            let response = await axios.get(`/api/questions/${question}/replies?page=${page}`)
            commit('UPDATE_REPLIES', response.data.data);
            commit('UPDATE_PAGINATION', Object.assign({}, { links: response.data.links }, { meta: response.data.meta }))
        }
    }
}