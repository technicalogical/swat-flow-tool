<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="note-deck">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li class="is-active"><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN Swat Note input section -->
    <form id="swat-note-input">
      <p class="help is-danger">THIS PAGE DOES NOT STORE CUSTOMER DATA</p>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input id="filled1" v-model="name" class="input is-small is-hovered" type="text" placeholder="Customer Name" />
          <span class="icon is-small is-left has-text-dark">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>
      <div id="sitch-text" class="control">
        <textarea id="filled2" v-model="sitch" class="textarea is-small is-hovered has-fixed-size" placeholder="Customer's situation"></textarea>
      </div>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input id="filled3" v-model="domain" class="input is-small is-hovered" type="text" placeholder="Domain(s)" />
          <span class="icon is-small is-left has-text-dark">
            <i class="fas fa-globe"></i>
          </span>
        </div>
        <p class="help is-info">Seperate multiple domains with commas.</p>
      </div>
      <div class="field">
        <div class="control">
          <div class="select is-small">
            <select id="methods" v-model="selected">
              <option disabled value="testing">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
        </div>
      </div>
    </form>

    <!-- END Swat Note input section -->
    <p id="closed" class="is-danger"><strong>THIS PAGE IS NOT ACTIVE.</strong></p>
    <!--  BEGIN Copy paste notes section -->

    <div id="call-notes">
      
      <p>#SWAT</p>
      <p>Customer name: {{ name }} </p>
      <p>Situation: {{ sitch }} </p>
      <p>Domain(s): {{ domain }} </p>
      <p>Methods: {{ method }} </p>

    </div>
    <!-- END Copy paste notes section -->

    <!-- BEGIN Note buttons section -->
      <p id="note-buttons" class="buttons">
      <button class="button is-small is-dark" value="" v-clipboard:copy="'#SWAT ' 
      + ' Name: ' + name
      + ' Situation: ' + sitch
      + ' Domain: ' + domain
      + ' Method: ' + method">
        <span class="icon has-text-success">
          <i class="fas fa-clipboard"></i>
        </span>
        <span>Copy to Clipboard</span>
      </button>
      <button type="button" value="" class="button is-small is-danger" onclick="document.getElementById('filled1').value = ''" >
        <span class="icon">
          <i class="fas fa-times-circle"></i>
        </span>
        <span><strong>RESET</strong></span>
      </button> 
    </p>
    <!-- END Note buttons section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'App',
  computed: {
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      'name',
      'sitch',
	    'domain',
	    'method',
    ]),
  },
}
</script>

<style src="../flow-style.scss" ></style>