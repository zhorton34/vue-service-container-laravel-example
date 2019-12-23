Container.provide({
    register({ Vue, container }) {
        // 1. create global Event bus on container
        container.$Event = new Vue()
        container.$Event.fire = container.$Event.$emit
        container.$Event.listen = container.$Event.$on
        container.$Event.forget = Container.$Event.$off
        container.$Event.listenOnce = container.$Event.$once

        // 2. Add  allows us to trigger reactive events outside the scope of Vue
        Vue.prototype['$Event'] = container.$Event
    }
})
