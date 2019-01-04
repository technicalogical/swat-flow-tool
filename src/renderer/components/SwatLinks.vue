<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li class="is-active"><router-link to="/SwatLinks">Swat Links</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN Swat Tools section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div class="notification is-dark">
        Here you will find strategically organized groupings of the most useful links tactically aquired from <strong>GoDaddy</strong> tribal knowledge. It is a primary recommendation that you bookmark your favorites in browser to be better prepared for future troubleshooting.
      </div>

      <!-- Tool page title -->
      <div id="tool-tab-center">
        <p class="is-size-6"><strong>SWAT LINKS</strong></p>
      </div>

      <!-- BEGIN - Swat Tool Tabs -->
      <div id="tool-tabs">
        <div id="tool-tab-left">
          <router-link to="/tools/HostingTools" class="button is-small is-dark">
            <span class="icon is-large has-text-success">
              <i class="fa fa-angle-left fa-2x"></i>
            </span>
            <span><strong>Hosting Links</strong></span>
          </router-link>
        </div>

        <div id="tool-tab-right">
          <router-link to="/tools/WebsiteTools" class="button is-small is-dark">
            <span><strong>Website Links</strong></span>
            <span class="icon is-large has-text-success">
              <i class="fa fa-angle-right fa-2x"></i>
            </span>
          </router-link>
        </div>
      </div>
      <!-- END - Swat Tool Tabs -->

      <!--Start SWAT Links section -->
      <p class="buttons">
         
        <p id="link-help" class="help">S.W.A.T. Team Links</p>
        <!-- SWAT confluence home page -->
        <a href="https://confluence.godaddy.com/pages/viewpage.action?spaceKey=HSWAT&title=SWAT+Team+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-home"></i>
          </span>
          <span><strong>S.W.A.T. Homepage</strong></span>
        </a>

        <!-- SWAT tier one confluence page -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-home"></i>
          </span>
          <span><strong>S.W.A.T. Tier 1 Homepage</strong></span>
        </a>

        <!-- SWAT transfer guidelines -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-phone"></i>
          </span>
          <span><strong>S.W.A.T. Call Transfer Guidelines</strong></span>
        </a>

        <!-- SWAT tier one playbook -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Playbook" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book"></i>
          </span>
          <span><strong>S.W.A.T. Tier 1 Playbook</strong></span>
        </a>

        <!-- SWAT team contacts -->
        <a href="https://confluence.godaddy.com/display/HSWAT/The+Team" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book"></i>
          </span>
          <span><strong>S.W.A.T. Team Contacts</strong></span>
        </a>

        <p id="link-help" class="help">GoDaddy Refund Policy</p>  
        <!-- GoDaddy refund policy -->
        <a href="https://www.godaddy.com/agreements/showdoc?pageid=19963&prog_id=GoDaddy" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-dollar-sign"></i>
          </span>
          <span><strong>GoDaddy Refund Policy</strong></span>
        </a>

        <!-- Out of policy refunds -->
        <a href="https://godaddy.jiveon.com/community/c3/c3-forms-policies-procedures/refund-toolkit" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-dollar-sign"></i>
          </span>
          <span><strong>The Refund Toolkit</strong></span>
        </a>
      
    </div>
    <!-- END SWAT Links section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default {

}
</script>

<style src="../flow-style.scss"></style>