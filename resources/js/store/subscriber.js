import store from "./index";

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`;
            } else {
                window.axios.defaults.headers.common['Authorization'] = null;
            }
            break;
    }
})