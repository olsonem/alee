import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CurrentWeather from '@/components/CurrentWeather'
import Accessories from '@/components/Accessories'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/current/:cityID',
      name: 'CurrentWeather',
      component: CurrentWeather
    },
    {
      path: '/current/:cityID',
      name: 'Accessories', 
      component: Accessories
    }

  ]
})


