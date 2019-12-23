import WelcomePage from '@Component/welcome-page.js'

Container.provide({
    boot({ Vue, store, content }) {
        store.commit('app', content)

        Vue.component('welcome-page', WelcomePage)
    },
})
