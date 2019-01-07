<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active"><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li><router-link to="/SwatLinks">Swat Links</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- START Opening comments for Swat FLow Chart -->
    <div id="flow-start-message" class="content is-small">
      <div class="notification is-dark">
        These are the <strong>Swat Flow Charts</strong>, designed to guide you quickly through the most common issues our customers are facing. Get started by selecting a common error below.
      </div>
    </div>
    <!-- END Opening comments for Swat Flow Chart -->

    <!-- BEGIN - Primary application deck -->
    <div class="content" id="flow">
      <div class="content" id="flow-deck-two">
        <p class="buttons">
          <router-link to="/flow/FiveError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>500 Error</strong> W.S.O.D. (white screen of death)</span>
          </router-link>  
          <router-link to="/flow/FourThree" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>403</strong> Website Error</span>
          </router-link>
          <router-link to="/flow/FourFour" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>404</strong> Website Error</span>
          </router-link>
          <router-link to="/flow/FiveThree" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>503</strong> Server Response Error</span>
          </router-link>
          <router-link to="/flow/FormError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>Form Mail</strong> Issues</span>
          </router-link>
          <router-link to="/flow/SslError" class="button is-dark is-small">
            <span class="icon has-text-success">
              <i class="fas fa-play-circle"></i>
            </span>
            <span><strong>SSL</strong> Errors</span>
          </router-link>
        </p>
      </div> 
    </div>
    <!-- END - Primary application deck -->

    <router-view/>

  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style src="../flow-style.scss" ></style>