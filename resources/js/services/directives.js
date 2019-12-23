Container.provide({
    register({ Vue }) {
        Vue.directive('href', (el, bind, vnode) => {
            el.onclick = () => window.location = bind.value
        })
    }
})
