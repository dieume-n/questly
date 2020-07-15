
export default {
    namespaced: true,

    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        }
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        }
    },

    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('/api/auth/signin', credentials)
            return dispatch('attempt', response.data.access_token);
        },
        // async attempt({ commit }, token) {
        //     commit('SET_TOKEN', token)
        //     try {
        //         let response = await axios.get('/api/auth/me');
        //         commit('SET_USER', response.data);
        //     } catch (e) {
        //         commit('SET_TOKEN', null);
        //         commit('SET_USER', null);
        //     }
        // },
        attempt({ commit }, token) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', token)
                axios.get('/api/auth/me').then(response => {
                    commit('SET_USER', response.data);
                    resolve(response);
                }).catch(error => {
                    commit('SET_TOKEN', null);
                    commit('SET_USER', null);
                    reject(error);
                })
            })
        }

    }
}