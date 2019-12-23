import routes from '@Routes'
import VueRouter from 'vue-router'

Container.provide({
    register({ Vue, root, use }) {
        // 1. Register Vue Router As A Plugin
        Vue.use(VueRouter)

        // 2. Create router from routes object
        const router = new VueRouter({ routes })

        // 3. set router on root instance
        root.set({ router })

        // 4. add router to context
        use({ router })
    }
})
