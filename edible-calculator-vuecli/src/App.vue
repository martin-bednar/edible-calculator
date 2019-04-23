<template>
  <div id="app">
    <site-header />
    <div id="nav">
    <ul>
      <li>
          <router-link to="/decarb-time-calculator">Decarb time calculator</router-link>
      </li>
      <li>
                    <router-link to="/dosage-calculator">Edible dosage calculator</router-link>

      </li>
    </ul></div>

    <router-view id="main-content"/>

  </div>
</template>
<script>
import SiteHeader from '@/components/Header.vue'
export default {
  components: { SiteHeader }
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
}
#nav {
  padding: 30px;
  font-size: 1.7rem;
  a {
      color: rgb(46, 43, 46);
    &:hover{
      color: white;
    }
    &::before{
      content: '\a0\a0\a0'; //Double blank space
    }
    &.router-link-exact-active::before,{
    content: '>> ';
    }
  }
  background-color: #0caa63;
    position: relative;
    top: -2vw;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 3vw),
    0 100%
  );
}
</style>
