import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sobre from '@/components/Sobre'
import Cadastro from '@/components/Cadastro'

Vue.use(Router)
Vue.use(Sobre)
Vue.use(Cadastro)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    }
  ]
})
