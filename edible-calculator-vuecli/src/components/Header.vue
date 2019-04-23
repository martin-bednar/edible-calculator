<template>
    <header class="site-header">
       <h2> edible calculator</h2>
    </header>
</template>

<script>
export default {
    name: 'site-header'
}
</script>

<style lang="scss" scoped>
.site-header{
    background-color: black;
    color:white;
  position: relative;
  padding-bottom: 30px;
  z-index: 99;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 2vw),
    0 100%
  );
}
h2{
    padding: 0 .5em;
    margin: 0;
}
</style>
