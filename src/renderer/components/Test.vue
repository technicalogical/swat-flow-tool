<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="app">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li class="is-active"><router-link to="/Test">Swat Test</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
  <h1>IP Lookup</h1>
  <form method="get">
<input id="test" v-model="domain" class="input is-small is-hovered" type="text" placeholder="Domain" v-on:enter="domain"/>
 {{ domain }}
 <button type="submit" name="button" v-on:submit="inputDomain">Submit</button>
 </form>
 </div>
</template>

<script>
import axios from 'axios'

export default {
   data:{
     domain: '',
   },
   data () {
    return {
      info: null,
      
    }
  },
  methods: {
  inputDomain: function(event){
  	this.domain = event.target.value;
  },
  mounted () {
    axios
      .get('https://dns-api.org/A/'+inputDomain)
      .then(response => (this.inputDomain = response))
  }
  }
}
</script>

        

    