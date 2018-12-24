<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">
    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li class="is-active"><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->
    <!-- START - Message of Swat FLow Chart -->
    <div id="flow-start-message">

      <!-- Opening Comments for Swat Flow Tool -->
      <div class="notification is-success is-small">
      
        <strong>Welcome to the S.W.A.T. Flow Tool</strong><br>
        This tool is provided to help you more accuratley navigate your call inorder to be as productive for your customer as possible.

      </div>
      <!-- END Opening comments for Swat Flow Tool -->

      <!-- BEGIN Home page primary links section -->
      <div id="home-links">
        <h1 class="title is-4">Flow Tool Quick Links:</h1>
        <p class="buttons">
          <a class="button is-large is-success">
            <span class="icon is-small">
              <i class="fas fa-file-alt"></i>
            </span>
          </a>
          <a class="button is-large is-success">
          <span class="icon">
            <i class="fas fa-clipboard-list"></i>
          </span>
          </a>
          <a class="button is-large is-success">
            <span class="icon is-medium">
              <i class="fas fa-columns"></i>
            </span>
          </a>
          <a class="button is-large is-success">
            <span class="icon is-medium">
              <i class="fas fa-heading"></i>
            </span>
          </a>
        </p>
      </div>
      <!-- END Home page primary links section -->
      
      <router-view/>
    </div>
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