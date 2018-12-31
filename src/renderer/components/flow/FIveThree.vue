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
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    
    <!-- BEGIN - 503 Server response Error Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="notification is-danger">
        <strong>503</strong> Server Response Error
      </div>
    </article>
    <!-- END - 503 Server response Error Text -->

    
    <!-- BEGIN 503 Error flow section -->
    <div class="content has-text-centered" id="flow">
      <div class="content is-medium">
        <p>Which platform is the customer website Hosted on?</p>
      </div>
      <p class="buttons">
          <router-link to="/flow/fiveothree/mwp/MwpY" class="button is-light">
            <span class="icon has-text-success">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <strong>Managed Wordpress</strong></span>
          </router-link>  
          <router-link to="/flow/fiveothree/linux/LinYes" class="button is-light">
            <span class="icon has-text-dark">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <strong>Linux (Cpanel)</strong></span>
          </router-link>
          <router-link to="/flow/fiveothree/win/WinYes" class="button is-light">
            <span class="icon has-text-info">
              <i class="fas fa-server"></i>
            </span>
            <span>Website is hosted on <strong>Winodws (Plesk)</strong></span>
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
    <!-- END 503 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  
}
</script>

<style scoped>
#flow-deck {
  position: relative;
  top: 0px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  height: 545px;
}

#wsod-message {
  position: relative;
  margin: 0px;
  margin-left: 20px;
  margin-right: 20px;
}

#flow {
  position: relative;
  display: block;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border: 0px;
  width: 90%;
  height: 340px;
  top: 10px;
}
</style>