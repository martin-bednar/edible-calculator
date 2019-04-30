<template>
    <footer class="site-footer flow-text">

    <div class="site-footer__wrapper">
      <router-link to="/" class="site-footer__link">
        Home
       </router-link>

      <a href="/sitemap.xml" class="site-footer__link">
        Sitemap
       </a>

      <a href="https://github.com/martin-bednar/edible-calculator" class="site-footer__link">
        View on github
       </a>

       © Edible Calculator 2019
       </div>
    </footer>
</template>

<script>
export default {
  name: 'site-footer'
}
</script>

<style lang="scss" scoped>
.site-footer{
    background-color: #0caa63;
    color: white;
    padding: 1em;
}
.site-footer__wrapper{
    font-size: 0.8em;
}
.site-footer__link{
    &::after{
        content: '|';
    }
    color: white;
}
</style>
