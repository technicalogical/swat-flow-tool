<template>
  <div id="flow-deck-two">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active"><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
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
      <div class="notification is-danger">
        <strong>STOP HERE</strong>.
      </div>
      <article class="message is-info">
        <div class="message-body">
          Advise the customer that they need to review their content further for possible file issues.
        </div>
      </article>
      <article class="message is-small is-success">
        <div class="message-body">
          Offer the customer <strong>WPPS (Wordpress Premium Support)</strong>. We can assist further with a premium support.
        </div>
      </article>
      <router-link to="/SwatFlow" class="button is-dark is-fullwidth">Return to start</router-link>
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
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
  border: 0px;
  width: 85%;
  height: 340px;
  top: 10px;
}
</style>