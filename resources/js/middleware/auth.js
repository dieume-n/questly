export default function auth({ next, store }) {
    if (!store.getters['auth/authenticated']) {
        return next({
            name: 'signin'
        })
    }

    return next()
}