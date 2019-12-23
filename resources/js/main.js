// main.js
import Vue from 'vue'
import { MakeServiceContainer } from 'vuejs-service-container'

// 1. create container
window.Container = MakeServiceContainer()

// 2. use container as vue plugin
Vue.use(Container)

