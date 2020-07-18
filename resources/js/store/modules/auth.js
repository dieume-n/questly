
export default {
    namespaced: true,

    state: {
        token: localStorage.getItem('token') || '',
        user: null
    },
    getters: {
        authenticated(state) {
            return state.token ? true : false; //&& state.user;
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
        async login({ dispatch }, credentials) {
            let response = await axios.post('/api/auth/signin', credentials)
            dispatch('attempt', response.data.access_token);
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                axios.post('/api/auth/signout').then(response => {
                    commit('SET_TOKEN', null);
                    commit('SET_USER', null);
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        },
        attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token)
            }

            if (!state.token) {
                return;
            }

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