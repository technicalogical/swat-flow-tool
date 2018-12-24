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
        <a id="min-btn" class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-minus fa-m"></i>
          </span>
        </a>
        <a id="close-btn" onclick="self.close()" class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-times fa-m"></i>
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
        <img src="./assets/icons/png/64x64.png" height="60px" width="60px" />
        <p id="app-vers">Swat Flow Tool ver 1.0.8 (Windu)</p>  
      </footer>
    <!-- END - Application footer section -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style src="./flow-style.scss" ></style>