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
        Here you will find a grouping of the most useful Website specific links tactically aquired from <strong>GoDaddy</strong> tribal knowledge. It is a primary recommendation that you bookmark your favorites in browser to be better prepared for future troubleshooting.
      </div>

      <p class="buttons">

        <!-- GTmetrix -->
        <a href="https://gtmetrix.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>GTmetrix</strong></span>
        </a>

        <!-- Pingdom -->
        <a href="https://tools.pingdom.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>Pingdom</strong></span>
        </a>
      
        <!-- Whatsmydns -->
        <a href="https://www.whatsmydns.net/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>Whatsmydns</strong></span>
        </a>

        <!-- Google apps Dig -->
        <a href="https://toolbox.googleapps.com/apps/dig/#CNAME/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>Google Apps DNS Dig</strong></span>
        </a>

        <!-- Dig Web interface -->
        <a href="https://www.digwebinterface.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>DIG Web Interface</strong></span>
        </a>
        
        <!-- DNS Trails -->
        <a href="https://securitytrails.com/dns-trails" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>DNS Trails</strong></span>
        </a>

        <!-- SSL Shopper -->
        <a href="https://www.sslshopper.com/ssl-checker.html" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-lock"></i>
          </span>
          <span><strong>SSL Shopper</strong></span>
        </a>

        <!-- Why no padlock -->
        <a href="https://www.whynopadlock.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-unlock"></i>
          </span>
          <span><strong>Why No Padlock</strong></span>
        </a>

        <!-- SSL Checker -->
        <a href="https://www.sslchecker.com/sslchecker" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-lock"></i>
          </span>
          <span><strong>SSL Checker</strong></span>
        </a>

        <!-- Host tracker -->
        <a href="https://www.host-tracker.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>Host Tracker</strong></span>
        </a>

        <!-- GEO peeker -->
        <a href="https://geopeeker.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>GeoPeeker</strong></span>
        </a>

        <!-- ShotSherpa -->
        <a href="https://shotsherpa.com/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>ShotSherpa</strong></span>
        </a>
               
        <!-- Spam Haus Look-up -->
        <a href="https://www.spamhaus.org/lookup/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>SPAMHAUS Look-up</strong></span>
        </a>

        <!-- nuestar domain blacklist check -->
        <a href="https://www.ultratools.com/tools/spamDBLookup" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>Domain black-list check</strong></span>
        </a>
      </p>
    </div>
    <!-- END Swat Tools section -->

    <!-- BEGIN - Swat Tool Tabs -->
    <div id="tool-tabs">
      <div id="tool-tab-left">
        <router-link to="/SwatTools" class="button is-small is-white">
          <span class="icon is-large">
            <i class="fa fa-angle-left fa-2x"></i>
          </span>
          <span><strong>Swat Tools</strong></span>
        </router-link>
      </div>
      <div id="tool-tab-right">
        
      </div>
    </div>
    <!-- END - Swat Tool Tabs -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>

</script>

<style src="../../flow-style.scss"></style>
