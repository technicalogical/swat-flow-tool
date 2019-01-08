<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
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
        <p>Upload <strong><a href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts?preview=/20748053/95313257/geoff.php" target="_blank">geoff.php</a></strong> to the file structure and send yourself an email. Check <strong><a href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank">Splunk</a></strong> to see if the email sent.</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/form/FormY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-check-circle"></i>
            </span>
            <span><strong>Yes</strong>. The email does show in Splunk</span>
          </router-link>  
          <router-link to="/flow/form/FormN" class="button is-light">
            <span class="icon has-text-danger">
              <i class="fas fa-exclamation-circle"></i>
            </span>
            <span><strong>No</strong>. The email doesn't show in Splunk</span>
          </router-link>
        </p>
      
        <!-- BEGIN - Back button -->
        <p class="buttons">
          <router-link to="/SwatFlow" class="button is-small is-info">
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

<style src="../../flow-style.scss"></style>