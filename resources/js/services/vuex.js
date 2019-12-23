import Vuex from 'vuex'
import StoreObject from '@Store'

Container.provide({
    register({ Vue, root, use }) {
        // 1. Register Vuex as a vue plugin
        Vue.use(Vuex)

        // 2. create the vuex store from the js StoreObject
        const store = new Vuex.Store(StoreObject)

        // 3. set the store on the root instance
        root.set({ store })

        // 4. use store within container provider context
        use({ store })
    }
})
