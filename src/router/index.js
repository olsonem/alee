import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CitySearch from '@/components/CitySearch'
//import CurrentWeather from '@/components/CurrentWeather'
//import Forecast from '@/components/Forecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CitySearch',
      component: CitySearch
    },
    {
      path: '/:cityId/current',
      name: 'CurrentWeather',
      component: CurrentWeather
    },
    {
      path: '/:cityId/forecast',
      name: 'Forecast',
      component: Forecast
    }
  ]
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
