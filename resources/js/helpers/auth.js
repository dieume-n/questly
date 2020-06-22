import Axios from "axios"

export function login(credentials) {
    return new Promise((resolve, reject) => {
        axios.post('/api/auth/login', credentials)
            .then(response => resolve(response.data))
            .catch(reject('invalid email or password'))
    });
}


export function