Container.provide({
    register({ Vue }) {
        Vue.filter('capitalize', str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
    }
})
