<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active"><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    <!-- START | Message of Swat FLow Chart -->
    <div id="flow-start-message">

      <!-- Opening Comments for Swat Flow Chart -->
      <article class="message is-info">
        <div class="message-body">
          This is the hosting <strong>Swat Flow Chart</strong>. It is designed to guide you quickly through the five most common issues our customers have when calling in. This Swat Flow Chart can also be  found at <strong>x.co/swat</strong>. Start with your options below to begin to work your way throgh the flow chart.
        </div>
      </article>
      <!-- END Opening comments for Swat Flow Chart -->

      <!-- BEGIN Flow chart -->
      <div class="buttons">
        <router-link class="button is-dark is-fullwidth" to="/flow/FiveError">500 Error | WSOD</router-link>
        <router-link class="button is-dark is-fullwidth" to="/flow/FourThree">403 Site  Error</router-link>
        <router-link class="button is-dark is-fullwidth" to="/flow/FourFour">404 Site Error</router-link>
        <router-link class="button is-dark is-fullwidth" to="/flow/FiveThree">503 Server Response Error</router-link>
        <router-link class="button is-dark is-fullwidth" to="/flow/FormError">Form Mail Issues</router-link>
      </div>
      <router-view/>
    </div>
    <!-- END | Message of Swat FLow Chart -->
    <router-view/>
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style src="../flow-style.scss" ></style>