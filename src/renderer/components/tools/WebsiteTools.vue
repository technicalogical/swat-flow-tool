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
        <!--Start Speed Test Tools -->
        <h5>Speed Tests</h5>
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
        
        <!--Start DNS Tools -->
        <p>
        <h5>DNS Tools</h5>
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

        <!-- Country Flags & IP Whois -->
        <!-- <a href="https://addons.mozilla.org/en-US/firefox/addon/country-flags-ip-whois/" target="_blank" class="button is-small is-dark">
          <span class="icon has-text-success">
            <i class="fas fa-globe"></i>
          </span>
          <span><strong>DNS Browser Plugin</strong></span>
        </a> -->

        <!--Start SSL Tools -->
        <p>
        <h5>SSL Tools</h5>
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

        <!--Start Hosting Tools -->
        <p>
        <h5>Hosting Tools</h5>
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

        
        <!--Start Email Tools -->
        <p>
        <h5>Email Tools</h5>
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

<style scoped>
#swat-deck {
  position: relative;
  top: 0px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  height: 545px;
}

#tool-page {
  position: relative;
  width: 90%;
  height: 490px;
  display:block;
  margin-left: auto;
  margin-right: auto;
  border: 0px;
}

#tool-tabs {
  position: absolute;
  display: block;
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  padding:0px;
  bottom: -55px;
  border: 0px;
  width: 100%;
  height: 35px;
}

#tool-tab-left {
  position: relative;
  float: left;
  margin: 0px;
  margin-left: 2px;
  padding: 0px;
  width: 150px;
  height: 35px;
  border: 0px;
}

#tool-tab-right {
  position: relative;
  float: right;
  margin: 0px;
  margin-right: 2px;
  padding: 0px;
  width: 150px;
  height: 35px;
  border: 0px;
}

#tool-tab-right a {
  float: right;
}
h5 { 
  margin: 1px;
}

a {
  margin: 1px 0px 1px 0px;
}
</style>