<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li class="is-active"><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
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
      <div class="content is-medium">
        <p>Where is the site error happening?</p>
      </div>
      <p class="buttons">
        <router-link to="/flow/fivehundrederror/Fos" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><strong>F.O.S.</strong> Front of customer website</span>
        </router-link>  
        <router-link to="/flow/fivehundrederror/Wpad" class="button is-light">
          <span class="icon has-text-success">
            <i class="fas fa-play-circle"></i>
          </span>
          <span><strong>Wp-admin</strong> On customer login page</span>
        </router-link>
      </p>
      
      <router-view/>

    </div>
    <!-- END 500 Error flow section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {
  name: 'FiveError'
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

#switch-set {
  position: relative;
  text-align: center;
  display: block;
  margin: 0px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px;
}
</style>