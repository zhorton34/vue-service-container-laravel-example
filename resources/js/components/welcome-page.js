export default {
    name: 'welcome-page',
    created() {
      this.$Event.listen('log', this.log)
    },
    data() {
        return {
            title: 'title create within vuejs'
        }
    },
    methods: {
        log(message) {
            console.log(message)
        }
    }
}
