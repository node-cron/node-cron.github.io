import Vue from 'vue'
import VueRouter from 'vue-router';
import Welcome from './pages/welcome.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Welcome }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router
}).$mount('#app')