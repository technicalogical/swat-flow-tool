<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li class="is-active"><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li><router-link to="/SwatLinks">Swat Links</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    
    <!-- START - Message of Swat FLow Chart -->
    <div class="content " id="flow-start-message">

      <!-- BEGIN Home page logo section -->
      <div id="logo-main">
        
      </div>
      <!-- END Home page logo section -->

    </div>

    <!-- BEGIN Start button -->
    <div id="get-start" class="field is-grouped">
      <p class="control">
        <router-link to="/SwatFlow" class="button is-small is-fullwidth is-dark">
          <strong>S.W.A.T. Flow</strong>
        </router-link>
        <br>
        <router-link to="/SwatNote" class="button is-small is-fullwidth is-dark">
          <strong>S.W.A.T. Note</strong>
        </router-link>
        <br>
        <router-link to="/SwatTools" class="button is-small is-fullwidth is-dark">
          <strong>S.W.A.T. Tools</strong>
        </router-link>
        <br>
        <router-link to="/SwatLinks" class="button is-small is-fullwidth is-dark">
          <strong>S.W.A.T. Links</strong>
        </router-link>
      </p>
    </div>
    <!-- END Start button -->

    <!-- BEGIN swat motto statement -->
    <div id="swat-motto">
      <p><strong>"Solve, Wow, Advocate, Transfer".</strong></p>
    </div>
    <!-- END swat motto statement -->

    <!-- END - Message of Swat FLow Chart -->
    
    <router-view/>
    
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style></style>