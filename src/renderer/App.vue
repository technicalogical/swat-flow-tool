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

      <!-- Button to link to CRM --> 
      <a id="crm-icon" href="https://x.co/webcrm" title="Launch CRM" target="_blank" class="button is-white is-small">
        <span class="icon is-small">
          <i class="fas fa-search fa-lg"></i>
        </span>
      </a>

      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-small is-white" title="Close SWAT Tool">
          <span class="icon">
            <i class="fas fa-times fa-lg"></i>
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

        <!-- Button to link to the conlfuence page -->
        <p id="helper-one" class="buttons">
          <a class="button is-white" href="http://x.co/flowtool" target="_blank" title="Give Feedback">
            <span class="icon has-text-dark">
              <i id="helper-icon" class="far fa-comment-alt is-lg"></i>
            </span>
          </a>
        </p>

        <img src="./assets/images/sft-green.png" />
        <p id="app-vers" class="is-italic"><strong>SWAT</strong> Flow Tool Beta ver <strong>1.1.27</strong> (<strong>Windu</strong>)</p>  
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