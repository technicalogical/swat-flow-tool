<template>
  <div id="app">

    <!-- BEGIN - Font Awesome icon support option -->
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <!-- END - Font Awesome icon support option -->

    <!-- BEGIN - Application top links section -->

    <!-- Button to close the app -->
    <div id="app-top-links">
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-times fa-m"></i>
          </span> 
        </a>
      </p>

      <!-- Button to link to the conlfuence page -->
      <p id="helper-one" class="buttons">
        <a class="button is-white" href="https://confluence.godaddy.com/display/HSWAT/SWAT+Flow+Tool" target="_blank" title="Give Flow Tool feedback">
          <span class="icon has-text-dark">
            <i class="fas fa-lightbulb is-medium"></i>
          </span>
        </a>
      </p>

      <!-- Button to access settings page page --> 
      <router-link id="settings-one" to="/SwatSettings" class="button is-white is-small">
        <span class="icon is-small">
          <i class="fas fa-sliders-h fa-lg"></i>
        </span>
      </router-link>
      
    </div>
    <!-- END - Application top links section -->

    <!-- BEGIN Swat Flow Tool application deck -->
    <div id="prime-app-deck">

      <!-- BEGIN - Vue router insertion point -->
      <router-view/>
      <!-- END - Vue router insertion point -->
      
    </div>
    <!-- END Swat Flow Tool application deck -->
  
    <!-- BEGIN - Application footer section -->
      <footer>
        <img src="./assets/images/sft-green.png" />
        <p id="app-vers" class="is-italic">SWAT Flow Tool Beta ver <strong>1.1.24</strong> (Windu)</p>  
      </footer>
    <!-- END - Application footer section -->
  </div>
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
};
  // export default {
    
  // }
</script>

<style src="./flow-style.scss" ></style>