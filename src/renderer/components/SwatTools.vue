<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li class="is-active"><router-link to="/SwatTools">Swat Tools</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div class="notification is-dark">
        This will become Swat DNS...
      </div>

      <!-- Tool page title -->
      <div id="tool-tab-center">
        <p class="is-size-6"><strong></strong></p>
      </div>

      <!-- BEGIN - Swat Tool Tabs -->
      <div id="tool-tabs">
        <div id="tool-tab-left">
          <router-link to="/tools/HostingTools" class="button is-small is-dark">
            <span class="icon is-medium">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><strong>Hosting Links</strong></span>
          </router-link>
        </div>

        <div id="tool-tab-right">
          <router-link to="/tools/WebsiteTools" class="button is-small is-dark">
            <span><strong>Website Links</strong></span>
            <span class="icon is-large">
              <i class="fa fa-angle-right fa-2x"></i>
            </span>
          </router-link>
        </div>
      </div>
      <!-- END - Swat Tool Tabs -->

      <!--Start Swat DNS section -->
      <div id="dns-tool" class="content">
        <div class="control">
          <p id="dns-help" class="help is-dark">Check Website DNS</p>
          <input class="input is-hovered is-small" type="text" placeholder="www.domain.com">
        </div>
        <div id="dns-output" class="control">
          <input class="input is-hovered is-small" type="text" value="192.168.1.189" readonly>
        </div>
        <button id="dns-reset" class="button is-small is-danger">Clear</button>
        <button id="dns-reset" class="button is-small is-info">Check</button>
      </div>

      
    </div>
    <!-- END Swat Tools section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style src="../flow-style.scss"></style>