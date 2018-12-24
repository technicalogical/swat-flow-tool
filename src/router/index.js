import Vue from 'vue'
import Router from 'vue-router'
import SwatHome from '@/components/SwatHome'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import FiveError from '@/components/flow/FiveError'
import FourThree from '@/components/flow/FourThree'
import FourFour from '@/components/flow/FourFour'
import FiveThree from '@/components/flow/FiveThree'
import FormError from '@/components/flow/FormError'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SwatHome',
      component: SwatHome
    },
    {
      path: '/SwatFlow',
      name: 'SwatFlow',
      component: SwatFlow
    },
    {
      path: '/SwatNote',
      name: 'Swat Note',
      component: SwatNote
    },
    {
      path: '/flow/FiveError',
      name: 'FiveError',
      component: FiveError,
    },
    {
      path: '/flow/FourThree',
      name: 'FourThree',
      component: FourThree,
    },
    {
      path: '/flow/FourFour',
      name: 'FourFour',
      component: FourFour,
    },
    {
      path: '/flow/FiveThree',
      name: 'FiveThree',
      component: FiveThree,
    },
    {
      path: '/flow/FormError',
      name: 'FormError',
      component: FormError,
    },
  ]
})
