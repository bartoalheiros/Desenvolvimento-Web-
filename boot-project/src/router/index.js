import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Sobre from '@/components/Sobre'
import Cadastro from '@/components/Cadastro'
import PainelAdmin from '@/components/PainelAdmin'

Vue.use(Router)
Vue.use(Sobre)
Vue.use(Cadastro)
Vue.use(Login)
Vue.use(PainelAdmin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/painelAdmin',
      name: 'PainelAdmin',
      component: PainelAdmin
    }
  ]
})
