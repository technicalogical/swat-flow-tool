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
        <button class="delete"></button>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet,
        consectetur adipiscing elit
      </div>
      <!-- END Opening comments for Swat Flow Tool -->
      
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