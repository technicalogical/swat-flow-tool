import Vue from 'vue'
import Router from 'vue-router'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import FiveError from '@/components/flow/FiveError'
import FourThree from '@/components/flow/FourThree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SwatFlow',
      component: SwatFlow,
      children: [
        {
          path: '/flow/FourThree',
          name: FourThree,
          component: FourThree
        }
      ] 
    },
    {
      path: '/SwatNote',
      name: 'Swat Note',
      component: SwatNote
    },
    {
      path: '/flow/FiveError',
      name: FiveError,
      component: FiveError,
    },
  ]
})
