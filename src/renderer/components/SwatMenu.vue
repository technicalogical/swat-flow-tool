<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    
    
    <!-- BEGIN Start button -->
    <div id="get-start" class="field is-grouped">
      <p class="control">
        <router-link to="/SwatFlow" class="button is-small is-fullwidth is-success">
          <strong>S.W.A.T. Flow</strong>
        </router-link>
        <br>
        <router-link to="/SwatNote" class="button is-small is-fullwidth is-success">
          <strong>S.W.A.T. Note</strong>
        </router-link>
        <br>
        <router-link to="/SwatTools" class="button is-small is-fullwidth is-success">
          <strong>S.W.A.T. Tools</strong>
        </router-link>
      </p>
    </div>
    <!-- END Start button -->

    <!-- END - Message of Swat FLow Chart -->
    <router-view/>
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style src="../flow-style.scss" ></style>