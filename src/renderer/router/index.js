import Vue from 'vue'
import Router from 'vue-router'
import '../../../node_modules/bulma/css/bulma.css';

// BEGIN Primary imported routes
import SwatHome from '@/components/SwatHome'
import SwatFlow from '@/components/SwatFlow'
import SwatNote from '@/components/SwatNote'
import SwatTools from '@/components/SwatTools'
import SwatSettings from '@/components/SwatSettings'
// END Primary imported routes

// SWAT Flow main menu routes
import FiveError from '@/components/flow/FiveError'
import FourThree from '@/components/flow/FourThree'
import FourFour from '@/components/flow/FourFour'
import FiveThree from '@/components/flow/FiveThree'
import FormError from '@/components/flow/FormError'
import No from '@/components/flow/No'
//SWAT Flow main menu routes

// BEGIN Form Mail error imported routes
import FormY from '@/components/flow/form/FormY'
import FormYb from '@/components/flow/form/FormYb'
import FormN from '@/components/flow/form/FormN'
import FormNa from '@/components/flow/form/FormNa'
import FormNaY from '@/components/flow/form/FormNaY'
import FormNaYa from '@/components/flow/form/FormNaYa'
import FormNaYb from '@/components/flow/form/FormNaYb'
import FormNaYbY from '@/components/flow/form/FormNaYbY'
import FormNaYbN from '@/components/flow/form/FormNaYbN'
import FormNaYc from '@/components/flow/form/FormNaYc'
import FormNaN from '@/components/flow/form/FormNaN'
// END Form Mail error imported routes

// BEGIN SSL error imported routes
import SslError from '@/components/flow/SslError'
import SslY from '@/components/flow/ssl/SslY'
import SslYa from '@/components/flow/ssl/SslYa'
import SslYaA from '@/components/flow/ssl/SslYaA'
import SslYaB from '@/components/flow/ssl/SslYaB'
import SslYaBy from '@/components/flow/ssl/SslYaBy'
import SslYb from '@/components/flow/ssl/SslYb'
import SslN from '@/components/flow/ssl/SslN'
import SslNa from '@/components/flow/ssl/SslNa'
import SslNb from '@/components/flow/ssl/SslNb'
import SslNbY from '@/components/flow/ssl/SslNbY'
import SslNbN from '@/components/flow/ssl/SslNbN'
// END SSL error imported routes

// BEGIN 500 error imported routes
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
// END 500 error imported routes

// BEGIN 403 error imported routes
import IndexYes from '@/components/flow/fourothree/IndexYes'
import IndexYesYes from '@/components/flow/fourothree/IndexYesYes'
import IndexNo from '@/components/flow/fourothree/IndexNo'
import IndexYesNo from '@/components/flow/fourothree/IndexYesNo'
// END 403 error imported routes

// BEGIN 404 error imported routes
import WpYes from '@/components/flow/fourofour/WpYes'
import WpYesYes from '@/components/flow/fourofour/WpYesYes'
import WpYesNo from '@/components/flow/fourofour/WpYesNo'
import WpYesYesNo from '@/components/flow/fourofour/WpYesYesNo'
import WpYesYesFinal from '@/components/flow/fourofour/WpYesYesFinal'
import WpGeoffYes from '@/components/flow/fourofour/WpGeoffYes'
import WpGeoffNo from '@/components/flow/fourofour/WpGeoffNo'
import WpGeoffYesStop from '@/components/flow/fourofour/WpGeoffYesStop'
import WpGeoffNoStop from '@/components/flow/fourofour/WpGeoffNoStop'
// END 404 error imported routes

// BEGIN 503 error imported routes
import MwpY from '@/components/flow/fiveothree/mwp/MwpY'
import MwpYyes from '@/components/flow/fiveothree/mwp/MwpYyes'
import MwpYyesFinal from '@/components/flow/fiveothree/mwp/MwpYyesFinal'
import MwpYno from '@/components/flow/fiveothree/mwp/MwpYno'
import MwpYnoFinal from '@/components/flow/fiveothree/mwp/MwpYnoFinal'
import WinYes from '@/components/flow/fiveothree/win/WinYes'
import WinYesY from '@/components/flow/fiveothree/win/WinYesY'
import WinYesYyes from '@/components/flow/fiveothree/win/WinYesYyes'
import WinYesYno from '@/components/flow/fiveothree/win/WinYesYno'
import WinYesYnoY from '@/components/flow/fiveothree/win/WinYesYnoY'
import WinYesYnoN from '@/components/flow/fiveothree/win/WinYesYnoN'
import WinYesN from '@/components/flow/fiveothree/win/WinYesN'
import LinYes from '@/components/flow/fiveothree/linux/LinYes'
import LinYesY from '@/components/flow/fiveothree/linux/LinYesY'
import LinYesYyes from '@/components/flow/fiveothree/linux/LinYesYyes'
import LinYesYyesY from '@/components/flow/fiveothree/linux/LinYesYyesY'
import LinYesYyesN from '@/components/flow/fiveothree/linux/LinYesYyesN'
import LinYesYyesNy from '@/components/flow/fiveothree/linux/LinYesYyesNy'
import LinYesYyesNn from '@/components/flow/fiveothree/linux/LinYesYyesNn'
import LinYesYno from '@/components/flow/fiveothree/linux/LinYesYno'
import LinYesYnoD from '@/components/flow/fiveothree/linux/LinYesYnoD'
import LinYesN from '@/components/flow/fiveothree/linux/LinYesN'
// END 503 error imported routes

// BEGIN Swat Tools imported routes
import HostingTools from '@/components/tools/HostingTools'
import WebsiteTools from '@/components/tools/WebsiteTools'
// END Swat Tools imported routes

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
      path: '/SwatTools',
      name: 'Swat Tools',
      component: SwatTools
    },
    {
      path: '/SwatSettings',
      name: 'Swat Settings',
      component: SwatSettings
    },
    {
      path: '/tools/HostingTools',
      name: 'Hosting Tools',
      component: HostingTools
    },
    {
      path: '/tools/WebsiteTools',
      name: 'Website Tools',
      component: WebsiteTools
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
      path: '/flow/fourofour/WpYesNo',
      name: 'WpYesNo',
      component: WpYesNo,
    },
    {
      path: '/flow/fourofour/WpYesYesNo',
      name: 'WpYesYesNo',
      component: WpYesYesNo,
    },
    {
      path: '/flow/fourofour/WpYesYesFinal',
      name: 'WpYesYesFinal',
      component: WpYesYesFinal,
    },
    {
      path: '/flow/fourofour/WpGeoffYes',
      name: 'WpGeoffYes',
      component: WpGeoffYes,
    },
    {
      path: '/flow/fourofour/WpGeoffNo',
      name: 'WpGeoffNo',
      component: WpGeoffNo,
    },
    {
      path: '/flow/fourofour/WpGeoffYesStop',
      name: 'WpGeoffYesStop',
      component: WpGeoffYesStop,
    },
    {
      path: '/flow/fourofour/WpGeoffNoStop',
      name: 'WpGeoffNoStop',
      component: WpGeoffNoStop,
    },
    {
      path: '/flow/FiveThree',
      name: 'FiveThree',
      component: FiveThree,
    },
    {
      path: '/flow/fiveothree/mwp/MwpY',
      name: 'MwpY',
      component: MwpY,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYyes',
      name: 'MwpYyes',
      component: MwpYyes,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYyesFinal',
      name: 'MwpYyesFinal',
      component: MwpYyesFinal,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYno',
      name: 'MwpYno',
      component: MwpYno,
    },
    {
      path: '/flow/fiveothree/mwp/MwpYnoFinal',
      name: 'MwpYnoFinal',
      component: MwpYnoFinal,
    },
    {
      path: '/flow/fiveothree/win/WinYes',
      name: 'WinYes',
      component: WinYes,
    },
    {
      path: '/flow/fiveothree/win/WinYesY',
      name: 'WinYesY',
      component: WinYesY,
    },
    {
      path: '/flow/fiveothree/win/WinYesYyes',
      name: 'WinYesYyes',
      component: WinYesYyes,
    },
    {
      path: '/flow/fiveothree/win/WinYesYno',
      name: 'WinYesYno',
      component: WinYesYno,
    },
    {
      path: '/flow/fiveothree/win/WinYesYnoY',
      name: 'WinYesYnoY',
      component: WinYesYnoY,
    },
    {
      path: '/flow/fiveothree/win/WinYesYnoN',
      name: 'WinYesYnoN',
      component: WinYesYnoN,
    },
    {
      path: '/flow/fiveothree/win/WinYesN',
      name: 'WinYesN',
      component: WinYesN,
    },
    {
      path: '/flow/fiveothree/linux/LinYes',
      name: 'LinYes',
      component: LinYes,
    },
    {
      path: '/flow/fiveothree/linux/LinYesY',
      name: 'LinYesY',
      component: LinYesY,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyes',
      name: 'LinYesYyes',
      component: LinYesYyes,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesY',
      name: 'LinYesYyesY',
      component: LinYesYyesY,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesN',
      name: 'LinYesYyesN',
      component: LinYesYyesN,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesNy',
      name: 'LinYesYyesNy',
      component: LinYesYyesNy,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYyesNn',
      name: 'LinYesYyesNn',
      component: LinYesYyesNn,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYno',
      name: 'LinYesYno',
      component: LinYesYno,
    },
    {
      path: '/flow/fiveothree/linux/LinYesYnoD',
      name: 'LinYesYnoD',
      component: LinYesYnoD,
    },
    {
      path: '/flow/fiveothree/linux/LinYesN',
      name: 'LinYesN',
      component: LinYesN,
    },
    {
      path: '/flow/FormError',
      name: 'FormError',
      component: FormError,
    },
    {
      path: '/flow/form/FormY',
      name: 'FormY',
      component: FormY,
    },
    {
      path: '/flow/form/FormYb',
      name: 'FormYb',
      component: FormYb,
    },
    {
      path: '/flow/form/FormN',
      name: 'FormN',
      component: FormN,
    },
    {
      path: '/flow/form/FormNa',
      name: 'FormNa',
      component: FormNa,
    },
    {
      path: '/flow/form/FormNaY',
      name: 'FormNaY',
      component: FormNaY,
    },
    {
      path: '/flow/form/FormNaYa',
      name: 'FormNaYa',
      component: FormNaYa,
    },
    {
      path: '/flow/form/FormNaYb',
      name: 'FormNaYb',
      component: FormNaYb,
    },
    {
      path: '/flow/form/FormNaYbY',
      name: 'FormNaYbY',
      component: FormNaYbY,
    },
    {
      path: '/flow/form/FormNaYbN',
      name: 'FormNaYbN',
      component: FormNaYbN,
    },
    {
      path: '/flow/form/FormNaYc',
      name: 'FormNaYc',
      component: FormNaYc,
    },
    {
      path: '/flow/form/FormNaN',
      name: 'FormNaN',
      component: FormNaN,
    },

    //BEGIN SSL routes
    {
      path: '/flow/SslError',
      name: 'SslError',
      component: SslError,
    },
    {
      path: '/flow/ssl/SslY',
      name: 'SslY',
      component: SslY,
    },
    {
      path: '/flow/ssl/SslYa',
      name: 'SslYa',
      component: SslYa,
    },
    {
      path: '/flow/ssl/SslYaA',
      name: 'SslYaA',
      component: SslYaA,
    },
    {
      path: '/flow/ssl/SslYaB',
      name: 'SslYaB',
      component: SslYaB,
    },
    {
      path: '/flow/ssl/SslYaBy',
      name: 'SslYaBy',
      component: SslYaBy,
    },
    {
      path: '/flow/ssl/SslYb',
      name: 'SslYb',
      component: SslYb,
    },
    {
      path: '/flow/ssl/SslN',
      name: 'SslN',
      component: SslN,
    },
    {
      path: '/flow/ssl/SslNa',
      name: 'SslNa',
      component: SslNa,
    },
    {
      path: '/flow/ssl/SslNb',
      name: 'SslNb',
      component: SslNb,
    },
    {
      path: '/flow/ssl/SslNbY',
      name: 'SslNbY',
      component: SslNbY,
    },
    {
      path: '/flow/ssl/SslNbN',
      name: 'SslNbN',
      component: SslNbN,
    },
    // END SSL Routes

  ]
})
