import Vue from 'vue'
import Router from 'vue-router'
import SwatHome from '@/components/SwatHome'
import SwatMenu from '@/components/SwatMenu'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import FiveError from '@/components/flow/FiveError'
import FourThree from '@/components/flow/FourThree'
import FourFour from '@/components/flow/FourFour'
import FiveThree from '@/components/flow/FiveThree'
import FormError from '@/components/flow/FormError'
import No from '@/components/flow/No'
import Fos from '@/components/flow/fivehundrederror/Fos'
import FosYes from '@/components/flow/fivehundrederror/FosYes'
import FosNo from '@/components/flow/fivehundrederror/FosNo'
import Wpad from '@/components/flow/fivehundrederror/Wpad'
import WpadYes from '@/components/flow/fivehundrederror/WpadYes'
import WpadNo from '@/components/flow/fivehundrederror/WpadNo'
import MwpYes from '@/components/flow/fivehundrederror/MwpYes'
import MwpYesNo from '@/components/flow/fivehundrederror/MwpYesNo'
import MwpYesNoYes from '@/components/flow/fivehundrederror/MwpYesNoYes'
import MwpYesNoNo from '@/components/flow/fivehundrederror/MwpYesNoNo'
import MwpYesYes from '@/components/flow/fivehundrederror/MwpYesYes'
import MwpNo from '@/components/flow/fivehundrederror/MwpNo'
import MwpYesFinal from '@/components/flow/fivehundrederror/MwpYesFinal'
import MwpNoFinal from '@/components/flow/fivehundrederror/MwpNoFinal'
import IndexYes from '@/components/flow/fourothree/IndexYes'
import IndexYesYes from '@/components/flow/fourothree/IndexYesYes'
import IndexNo from '@/components/flow/fourothree/IndexNo'
import IndexYesNo from '@/components/flow/fourothree/IndexYesNo'
import WpYes from '@/components/flow/fourofour/WpYes'
import WpYesYes from '@/components/flow/fourofour/WpYesYes'
import WpYesYesFinal from '@/components/flow/fourofour/WpYesYesFinal'
import WpNo from '@/components/flow/fourofour/WpNo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SwatHome',
      component: SwatHome
    },
    {
      path: '/SwatMenu',
      name: 'SwatMenu',
      component: SwatMenu
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
      path: '/flow/No',
      name: 'No',
      component: No
    },
    {
      path: '/flow/FiveError',
      name: 'FiveError',
      component: FiveError,
    },
    {
      path: '/flow/fivehundrederror/Fos',
      name: 'Fos',
      component: Fos
    },
    {
      path: '/flow/fivehundrederror/FosYes',
      name: 'FosYes',
      component: FosYes
    },
    {
      path: '/flow/fivehundrederror/FosNo',
      name: 'FosNo',
      component: FosNo
    },
    {
      path: '/flow/fivehundrederror/Wpad',
      name: 'Wpad',
      component: Wpad
    },
    {
      path: '/flow/fivehundrederror/WpadYes',
      name: 'WpadYes',
      component: WpadYes
    },
    {
      path: '/flow/fivehundrederror/WpadNo',
      name: 'WpadNo',
      component: WpadNo
    },
    {
      path: '/flow/fivehundrederror/MwpYes',
      name: 'MwpYes',
      component: MwpYes
    },
    {
      path: '/flow/fivehundrederror/MwpYesNo',
      name: 'MwpYesNo',
      component: MwpYesNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesNoYes',
      name: 'MwpYesNoYes',
      component: MwpYesNoYes
    },
    {
      path: '/flow/fivehundrederror/MwpYesNoNo',
      name: 'MwpYesNoNo',
      component: MwpYesNoNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesYes',
      name: 'MwpYesYes',
      component: MwpYesYes
    },
    {
      path: '/flow/fivehundrederror/MwpNo',
      name: 'MwpNo',
      component: MwpNo
    },
    {
      path: '/flow/fivehundrederror/MwpYesFinal',
      name: 'MwpYesFinal',
      component: MwpYesFinal
    },
    {
      path: '/flow/fivehundrederror/MwpNoFinal',
      name: 'MwpNoFinal',
      component: MwpNoFinal
    },
    {
      path: '/flow/FourThree',
      name: 'FourThree',
      component: FourThree,
    },
    {
      path: '/flow/fourothree/IndexYes',
      name: 'IndexYes',
      component: IndexYes
    },
    {
      path: '/flow/fourothree/IndexYesYes',
      name: 'IndexYesYes',
      component: IndexYesYes
    },
    {
      path: '/flow/fourothree/IndexYesNo',
      name: 'IndexYesNo',
      component: IndexYesNo
    },
    {
      path: '/flow/fourothree/IndexNo',
      name: 'IndexNo',
      component: IndexNo
    },
    {
      path: '/flow/FourFour',
      name: 'FourFour',
      component: FourFour,
    },
    {
      path: '/flow/fourofour/WpYes',
      name: 'WpYes',
      component: WpYes,
    },
    {
      path: '/flow/fourofour/WpYesYes',
      name: 'WpYesYes',
      component: WpYesYes,
    },
    {
      path: '/flow/fourofour/WpYesYesFinal',
      name: 'WpYesYesFinal',
      component: WpYesYesFinal,
    },
    {
      path: '/flow/fourofour/WpNo',
      name: 'WpNo',
      component: WpNo,
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
