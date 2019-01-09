<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small is-centered">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li><router-link to="/SwatNote">Swat Note</router-link></li>
        <li class="is-active"><router-link to="/SwatTools">Swat Tools</router-link></li>
        <li><router-link to="/SwatLinks">Swat Links</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN Swat DNS section -->
    <div id="tool-page" class="content is-small">

      <!-- Swat Tools opening note -->
      <div class="notification is-dark">
        This will become Swat DNS...
      </div>

      <!-- Tool page title -->
      <div id="tool-tab-center">
        <p class="is-size-6"><strong></strong></p>
      </div>

      <!--BEGIN Swat DNS section -->
      <form id="dns-tool" class="content">
        <div class="control">
          <p id="dns-help" class="help is-dark"><strong>Check Website DNS</strong></p>
          <input v-bind="dirtyURL" v-model="dirtyURL" class="input is-hovered is-small" type="text" placeholder="www.domain.com">
        </div>
        <div id="dns-output" class="control">
          <input class="input is-hovered is-small" type="text" value="192.168.1.189" readonly>
        </div>
        <button id="dns-reset" class="button is-small is-danger" onclick="document.getElementById('dns-tool').reset()">Clear</button>
        <button v-on:click="handleCheckDnswButton" id="dns-reset" class="button is-small is-dark" onclick="submit();">Check</button>
      </form>
      <!--END Swat DNS section -->
      <h4> Hello: {{ dirtyURL }}</h4>
    </div>
    <!-- END Swat DNS section -->

  </div>
  <!-- END - Primary application deck -->
    
</template>

<script>
export default({
  data: {
    // declare message with an empty value
    dirtyURL: '',
    cleanUrl: '',
    aRecord: '',
    mxRecord: '',
  },
  methods:{
    handleCheckDnswButton: function(){
      console.log("Clicked DNS Lookup: " + this.dirtyURL);
      // TODO: Code to clean up the URL, and then pass it to clean URL function.
  var a = this.dirtyURL;

  a = a.split('/')[2];

  a = a

    .replace('https', '')

    .replace('http', '')

    .replace('www.', '')

    .replace('://', '')

    .replace(/\/$/, '')

  return a
      this.cleanUrl(this.a);
    },
    cleanUrl: function(){
      console.log("Cleaning the url");
      return "Cleaned URL"
      console.log("Cleaned URL: " + this.a)
    },
    // callDnsApi: function(){
    //   axios.get()
    //   .then(r => ({

    //   }))
    // }
  }
})
// set `message` later



// function submit() {
//   var dirtyURL = document.getElementById('dnsInput');  
//   console.log(dirtyURL);
// }
// function cleanURL(dirtyURL){

//   var a = dirtyURL;

//   a = a.split('/')[2];

//   a = a

//     .replace('https', '')

//     .replace('http', '')

//     .replace('www.', '')

//     .replace('://', '')

//     .replace(/\/$/, '')

//   return a


// }
// function aRecordLookup(domain){

//   var a = domain;

//   axios.get('https://dns-api.org/A/'+a)

//   .then(function (response){

 

//     //  FROM HERE YOU CAN do whatever you need

    

//     var jsonResponse = response.data;

//     var arecords = document.getElementById("a-records");

//     for(var i = 0; i < jsonResponse.length; i++){

//       var stringResponseName = JSON.stringify(jsonResponse[i].name);

//       var stringResponseValue = JSON.stringify(jsonResponse[i].value);

//       var stringResponseTTL = JSON.stringify(jsonResponse[i].ttl);

//       var node = document.createElement("li") // Create <li> node

//       var textNode = document.createTextNode(

//           "Name: " + stringResponseName + " | " +

//           "Value: " + stringResponseValue + " | " +

//           "TTL: " + stringResponseTTL); // Create text node

//       node.appendChild(textNode); // Append the text to the <li>

//       arecords.appendChild(node);

//     }

//   })

//   .catch(function (error){

//     console.log(error);

//   });
// }
</script>

<style src="../flow-style.scss"></style>