
export default {
    namespaced: true,

    state: {
        questions: []
    },

    getters: {
        allQuestions(state) {
            return state.questions;
        }

    },

    mutations: {
        SET_QUESTIONS(state, data) {
            state.questions = data;
        }
    },

    actions: {
        async fetchQuestions({ commit }) {
            let response = await axios.get('/api/questions')
            commit('SET_QUESTIONS', response.data.data);
        }

    }
}