import store from "./index";

store.subscribe((mutation) => {
    switch (mutation.type) {
        case 'auth/SET_TOKEN':
            if (mutation.payload) {
                window.axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`;
                localStorage.setItem('token', mutation.payload);
                console.log('auth set');
            } else {
                delete window.axios.defaults.headers.common['Authorization'];
                localStorage.removeItem('token');
            }
            break;
        // case 'auth/SET_USER':
        //     if (mutation.payload) {
        //         localStorage.setItem('user', JSON.stringify(mutation.payload))
        //     } else {
        //         localStorage.removeItem('user');
        //     }
        //     break;
    }
})