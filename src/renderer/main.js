import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueClipboard from 'vue-clipboard2'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
// Import the `getField` getter and the `updateField`
// mutation function from the `vuex-map-fields` module.
import { getField, updateField } from "vuex-map-fields";


Vue.use(VueClipboard);
new Vue({
  el: '#note-deck',
  
  data: function () {
    return {
      message: 'Copy These Text',
      albums: [],
      info: null,
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  },
  mounted(){ 
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
      
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(response =>{
 this.albums = response.data;
 console.log("Albums: " + this.albums);
 })
 .catch(error =>{
 console.log(error);
})
  }
})
Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    name: '',
    sitch: '',
	  domain: '',
	  method: ''
  },
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
  mutations: {
    // Add the `updateField` mutation to the
    // `mutations` of your Vuex store instance.
    updateField,
  },
});



/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
