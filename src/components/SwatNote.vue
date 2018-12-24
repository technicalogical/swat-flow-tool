<template>
  
  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck">

    <!-- BEGIN - Application Primary nav section -->
    <nav class="tabs is-small">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/SwatFlow">Swat Flow</router-link></li>
        <li class="is-active"><router-link to="/SwatNote">Swat Note</router-link></li>
      </ul>  
    </nav>
    <!-- END - Application Primary nav section -->

    <!-- BEGIN Swat Note input section -->
    <div id="swat-note-input">
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="name" class="input is-small" type="text" placeholder="Customer Name" >
          <span class="icon is-small is-left has-text-info">
            <i class="fas fa-user"></i>
          </span>
        </div>
        <p class="help is-info">Remember to always get your customer's name.</p>
      </div>

      <div id="sitch-text" class="control">
        <textarea v-model="sitch" class="textarea is-small has-fixed-size" placeholder="Customer's situation"></textarea>
      </div>

      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="domain" class="input is-small" type="text" placeholder="Domain(s)" >
          <span class="icon is-small is-left has-text-info">
            <i class="fas fa-globe"></i>
          </span>
        </div>
        <p class="help is-info">Seperate multiple domains with commas.</p>
      </div>

      
    </div>
    <!-- END Swat Note input section -->

    <!-- BEGIN Copy paste notes section -->
    <div id="call-notes">
      <p>#SWAT</p>
      <p>Customer name: {{ name }} </p>
      <p>Situation: {{ sitch }} </p>
      <p>Domain(s): {{ domain }} </p>
    </div>
    <!-- END Copy paste notes section -->

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