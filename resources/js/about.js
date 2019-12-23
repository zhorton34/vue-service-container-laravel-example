import AboutUs from '@Component/about/about-us.js'

Container.provide({
    boot({ Vue }) {
        Vue.component('about-us', AboutUs)
    },
})
