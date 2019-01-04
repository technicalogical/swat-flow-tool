<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
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
    
    <!-- BEGIN - Form mail Error Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>Form Mail</strong> Error
      </div>
    </article>
    <!-- END - Form mail Error Text -->

    
    <!-- BEGIN Form mail Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>What did <strong>Splunk</strong> show as a result for this email?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/form/FormNaYa" class="button is-light">
            <span class="icon has-text-warning">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span>Email shows as <strong>CMAE-SPAM</strong></span>
          </router-link>  
          <router-link to="/flow/form/FormNaYb" class="button is-light">
            <span class="icon has-text-warning">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span>Email shows as <strong>Accept/Delivered</strong></span>
          </router-link>
          <router-link to="/flow/form/FormNaYc" class="button is-light">
            <span class="icon has-text-warning">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
            <span>Email shows <strong>Bad-Subject</strong></span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/flow/form/FormNa" class="button is-small is-info">
            <span class="icon has-text-light">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>BACK</span>
          </router-link>
        </p>
        <!-- END - Back button -->

      <router-view/>
    </div>
    <!-- END Form mail Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style src="../../../flow-style.scss"></style>