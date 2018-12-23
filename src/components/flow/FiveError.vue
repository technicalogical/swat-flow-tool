<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="flow-deck">

    <!-- 500 Error / WSOD Text -->
    <article id="wsod-message" class="message is-danger">
      <div class="message-header">
        <p>500 Error / WSOD (White Screen of Death)</p>
      </div>
      <div class="message-body">
        Where is error happening?
      </div>
    </article>
    
    <!-- END - 500 Error / WSOD Text -->
    <div id="switch-set" class="buttons are-medium">
      <a class="button">Front of customer website</a>
      <a class="button">On wp-admin page</a>
    </div>
    <!-- BEGIN 500 Error flow section -->
    <div id="flow">
      
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
  border: 1px solid black;
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