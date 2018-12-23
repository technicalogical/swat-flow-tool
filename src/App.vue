<template>
  <div id="app">

    <!-- BEGIN - Font Awesome icon support option -->
    <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <!-- END - Font Awesome icon support option -->

    <!-- BEGIN - Application top links section -->
    <div id="app-top-links">
      <p class="buttons is-right">
        <a class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-minus fa-m"></i>
          </span>
        </a>
        <a class="button is-small is-white">
          <span class="icon">
            <i class="fas fa-times fa-m"></i>
          </span>
        </a>
      </p>
    </div>
    <!-- END - Application top links section -->

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN - Vue router insertion point -->
    <router-view/>
    <!-- END - Vue router insertion point -->

    <!-- BEGIN - Application footer section -->
      <footer>
        <img src="./assets/icons/png/64x64.png" />
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