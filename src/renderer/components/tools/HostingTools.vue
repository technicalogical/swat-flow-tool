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
        Here you will find a grouping of the most useful Hosting links tactically aquired from <strong>GoDaddy</strong> tribal knowledge. It is a primary recommendation that you bookmark your favorites in browser to be better prepared for future troubleshooting.
      </div>

      <p class="buttons">
      <!--Start Restore and Migration Tools -->
        
        <!-- Restore U -->
        <a href="https://hs.int.godaddy.com/restore-u/#/index" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-server"></i>
          </span>
          <span><strong>Restore U</strong></span>
        </a>

        <!-- Migrate U -->
        <a href="https://exserv.int.godaddy.com/services/migrations" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-server"></i>
          </span>
          <span><strong>Migrate U</strong></span>
        </a>
        <!--Start Knowledgebase Tools -->
        
        
        <!-- Hosting Kb -->
        <a href="https://confluence.godaddy.com/display/C3PHS/Hosting+Support+Knowledge+Base+-+Hitchhikers+Guide+to+Hosting" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book"></i>
          </span>
          <span><strong>General Hosting Knowledge Base</strong></span>
        </a>

        <!-- General hosting expert services -->
        <a href="https://confluence.godaddy.com/display/C3PHS/Expert+Services+-+Expert+Services+Menu" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-book-open"></i>
          </span>
          <span><strong>Expert Services Menu</strong></span>
        </a>

        <!-- The Cheat Sheet -->
        <a href="https://godaddy.jiveon.com/community/c3/the-cheatsheet" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-file-alt"></i>
          </span>
          <span><strong>The Cheat Sheet</strong></span>
        </a>
        <!--Start Troubleshooting Tools -->
      
        
        <!-- C3 hub -->
        <a href="https://godaddy.jiveon.com/community/c3/c3-hub" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-th"></i>
          </span>
          <span><strong>C3 Hub</strong></span>
        </a>
        
        <!-- C3 hub -->
        <a href="https://godaddy.splunkcloud.com/en-US/app/ahs/search" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-envelope"></i>
          </span>
          <span><strong>Splunk</strong></span>
        </a>

        <!-- Approved test scripts -->
        <a href="https://confluence.godaddy.com/display/C3PHS/General+-+Tools+-+Approved+Test+Scripts" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-file-archive"></i>
          </span>
          <span><strong>Approved Test Scripts</strong></span>
        </a>

        <!-- Toolzilla -->
        <a href="https://toolzilla.int.godaddy.com/index.php/AccountSearch/View" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-toolbox"></i>
          </span>
          <span><strong>Toolzilla</strong></span>
        </a>
      </p>
    </div>
    <!-- END Swat Tools section -->

    <!-- BEGIN - Swat Tool Tabs -->
    <div id="tool-tabs">
      <div id="tool-tab-left">
        
      </div>
      <div id="tool-tab-right">
        <router-link to="/SwatTools" class="button is-small is-white">
          <span><strong>Swat Tools</strong></span>
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
export default {

}
</script>

<style src="../../flow-style.scss"></style>
