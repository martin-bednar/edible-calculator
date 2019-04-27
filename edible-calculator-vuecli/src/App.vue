<template>
  <div id="app">
    <site-header />
    

    <router-view id="main-content"/>

    <site-footer />
  </div>
</template>
<script>
import SiteHeader from '@/components/Header.vue'
import SiteFooter from '@/components/Footer.vue'
export default {
  components: { SiteHeader, SiteFooter }
}
</script>

<style lang="scss">
#main-content{

  padding: 0 1em;
}
#app {
  font-family: 'Inconsolata', monospace;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  min-height: 100vh;
  grid-template: auto 1fr auto / 100%;
}

</style>
