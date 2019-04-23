<template>
    <header class="site-header">
      <router-link to="/">
       <h2> edible calculator <span class="blink"> _</span></h2>
       </router-link>
    </header>
</template>

<script>
export default {
  name: 'site-header'
}
</script>

<style lang="scss" scoped>
.site-header{
  padding: 2em 1em;
    background-color: black;
    color:white;
  position: relative;
  z-index: 99;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 1vw),
    0 100%
  );
}
h2{
    padding: 0 .5em;
    margin: 0;
    color:#0caa63;
}
@keyframes blink-anim {
  0%{
    opacity: 0;
  }
  45%{
    opacity: 0;
  }
  55%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
}
.blink{
  opacity: 0;
  animation: blink-anim 1.1s  200ms infinite;
}
</style>
