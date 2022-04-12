import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import GoogleLogin from 'vue-google-login'
import VueChatScroll from 'vue-chat-scroll';
Vue.use(GoogleLogin)
Vue.use(VueChatScroll)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
Vue.use(VueRouter)
import axios from 'axios' 

axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded' 
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { 
      path: '/signup',
      name: 'signup',
      component: () => import('./components/SignupScreen.vue')
    },
    { 
      path: '/signin',
      name: 'signin',
      component: () => import('./components/SigninScreen.vue')
    },
    {
      path: '/lobby/:id',
      name:'lobby',
      component: () => import('./components/LobbyHome.vue'),
      props:true

    },
  ],  
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
