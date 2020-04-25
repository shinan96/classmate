import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue';
import Ask from '@/views/ask.vue';

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
}, {
  path: '/ask',
  name: 'Ask',
  component: Ask
}]

const router = new VueRouter({
  routes
})

export default router