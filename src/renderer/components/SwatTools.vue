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
      <div class="notification is-success">
        Here you will find strategically organized groupings of the most useful links tactically aquired from <strong>GoDaddy</strong> tribal knowledge. It is a primary recommendation that you bookmark your favorites in browser to be better prepared for future troubleshooting.
      </div>


      <p class="buttons">

        <!-- SWAT confluence home page -->
        <a href="https://confluence.godaddy.com/pages/viewpage.action?spaceKey=HSWAT&title=SWAT+Team+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-home"></i>
          </span>
          <span><strong>S.W.A.T. Home page</strong></span>
        </a>

        <!-- SWAT tier one confluence page -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-home"></i>
          </span>
          <span><strong>S.W.A.T. TIer 1 Home page</strong></span>
        </a>

        <!-- SWAT transfer guidelines -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Swat+Tier+1+Home" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-phone"></i>
          </span>
          <span><strong>S.W.A.T. call transfer guidelines</strong></span>
        </a>

        <!-- SWAT tier one playbook -->
        <a href="https://confluence.godaddy.com/display/HSWAT/Playbook" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book"></i>
          </span>
          <span><strong>S.W.A.T. tier 1 playbook</strong></span>
        </a>

        <!-- SWAT team contacts -->
        <a href="https://confluence.godaddy.com/display/HSWAT/The+Team" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book"></i>
          </span>
          <span><strong>S.W.A.T. team contacts</strong></span>
        </a>
        
        <!-- Approved test scripts -->
        <a href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-file-archive"></i>
          </span>
          <span><strong>Approved test scripts</strong></span>
        </a>

        <!-- GoDaddy refund policy -->
        <a href="https://www.godaddy.com/agreements/showdoc?pageid=19963&prog_id=GoDaddy" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-dollar-sign"></i>
          </span>
          <span><strong>GoDaddy refund policy</strong></span>
        </a>


        <!-- Out of policy refunds -->
        <a href="https://godaddy.jiveon.com/community/c3/c3-forms-policies-procedures/refund-toolkit" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-dollar-sign"></i>
          </span>
          <span><strong>The Refund Toolkit</strong></span>
        </a>
      </p>
    </div>
    <!-- END Swat Tools section -->

    <!-- BEGIN - Swat Tool Tabs -->
    <div id="tool-tabs">
      <div id="tool-tab-left">
        <router-link to="/tools/HostingTools" class="button is-small is-white">
          <span class="icon is-medium">
            <i class="fa fa-angle-left fa-2x"></i>
          </span>
          <span><strong>Hosting Tools</strong></span>
        </router-link>
      </div>
      <div id="tool-tab-right">
        <router-link to="/tools/WebsiteTools" class="button is-small is-white">
          <span><strong>Website Tools</strong></span>
          <span class="icon is-large">
            <i class="fa fa-angle-right fa-2x"></i>
          </span>
        </router-link>
      </div>
    </div>
    <!-- END - Swat Tool Tabs -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default({
  el: '#swat-note-input',
 data: function() {
    return {
      name: "",
      sitch: "",
      domain: ""
    }
  }
})
</script>

<style src="../flow-style.scss" ></style>