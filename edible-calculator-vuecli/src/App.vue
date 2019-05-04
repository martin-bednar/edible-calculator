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

  padding: 4em 1em;
}
#app {
  font-family: 'Inconsolata', monospace;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  min-height: 100vh;
  grid-template: auto 1fr auto / 100%;
}
a{
  color: #0c9751;
}

.--message-neutral{
  border-radius: 3px;
  padding: 3px .5em;
  background-color: rgba(163, 206, 231,0.8);
  display: inline-block;
}
</style>
