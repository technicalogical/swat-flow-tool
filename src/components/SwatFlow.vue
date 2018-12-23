<template>

  <!-- BEGIN - Primary application deck -->
  <div id="swat-deck" class="hello">

    <!-- START | Message of Swat FLow Chart -->
    <div id="flow-start-message">

      <!-- Opening Comments for Swat Flow Chart -->
      <article class="message is-info is-small">
        <div class="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
      </article>
      <!-- END Opening comments for Swat Flow Chart -->

      <!-- BEGIN Flow chart -->
      <div class="buttons">
        <router-link class="button is-dark is-fullwidth" to="/flow/FiveError">500 Error | WSOD</router-link>
        <span class="button is-dark is-fullwidth">Save and continue</span>
        <span class="button is-dark is-fullwidth">Cancel</span>
        <span class="button is-dark is-fullwidth">Save changes</span>
        <span class="button is-dark is-fullwidth">Save and continue</span>
      </div>
      <router-view/>
    </div>
    <!-- END | Message of Swat FLow Chart -->
    <router-view/>
  </div>
  <!-- END - Primary application deck -->
  
</template>

<script>
export default {
  
}
</script>

<style src="../flow-style.scss" ></style>