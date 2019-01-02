<template>
  <div id="app">

    <!-- BEGIN - Font Awesome icon support option -->
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
    <!-- END - Font Awesome icon support option -->

    <!-- BEGIN - Application top links section -->
    <div id="app-top-links">
      <p class="buttons is-right">
        <a id="close-btn" onclick="self.close()" class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-times fa-m"></i>
          </span> 
        </a>
      </p>
      <p id="helper-one" class="buttons">
        <a class="button is-small is-white" href="https://confluence.godaddy.com/display/HSWAT/SWAT+Flow+Tool" target="_blank" title="Give Flow Tool feedback">
          <span class="icon has-text-info">
            <i class="fas fa-comment-alt"></i>
          </span>
        </a>
      </p>
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
        <p id="app-vers" class="is-italic">SWAT Flow Tool Beta ver <strong>1.1.22</strong> (Windu)</p>  
      </footer>
    <!-- END - Application footer section -->
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style src="./flow-style.scss" ></style>