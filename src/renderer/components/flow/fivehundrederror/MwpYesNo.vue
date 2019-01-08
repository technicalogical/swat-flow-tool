<template>
<div id="flow-deck-two">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small is-centered">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active"><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li><router-link to="/SwatLinks">Swat Links</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    
    <!-- 500 Error / WSOD Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>500 Error / W.S.O.D. (White Screen of Death)</strong>
      </div>
    </article>
    <!-- END - 500 Error / WSOD Text -->

    
    <!-- BEGIN 500 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <!-- BEGIN - Primary application deck -->
      <div class="content is-medium" id="flow-deck-two">
      <p>Does the wp-config file have “extra” coding that you do not recognize?</p>
      <p class="buttons">
          <router-link to="/flow/fivehundrederror/MwpYesNoYes" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. There is extra code.</span>
          </router-link>  
          <router-link to="/flow/fivehundrederror/MwpYesNoNo" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. wp-config is normal.</span>
          </router-link>
        </p>
      </div> 
      <!-- END - Primary application deck -->
      	  <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/MwpYes" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->
      <router-view/>
    </div>
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style src="../../../flow-style.scss"></style>