import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
// import { setTitleHack } from '@/until';

Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: '麦吉太文'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '麦吉太文'
      }
    }
  ]
})
