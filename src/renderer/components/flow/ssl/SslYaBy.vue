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
    
    <!-- SSL Website Errors Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>SSL</strong> Website Error
      </div>
    </article>
    <!-- END - SSL Website Errors Text -->

    
    <!-- BEGIN SSL Website Errors section -->
    <div class="content has-text-centered" id="flow">    
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-small is-info">
        <div class="message-body">
          This issue is contnet related. Advise the customer to review their website code for errors.
        </div>
      </article>

      <article class="message is-small is-success">
        <div class="message-body">
          If the website is Wordpress based offer the customer <strong>WPPS (Wordpress premium support)</strong> to help resolve this issue.
        </div>
      </article>

      <!-- BEGIN - Back button -->
      <p class="buttons">
        <router-link to="/flow/ssl/SslYaB" class="button is-small is-info">
          <span class="icon has-text-light">
            <i class="fas fa-chevron-left"></i>
          </span>
          <span>BACK</span>
        </router-link>
      </p>
      <!-- END - Back button -->

      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
      <router-view/>
    </div>
    <!-- END SSL Website Errors section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style src="../../../flow-style.scss"></style>