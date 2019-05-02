<template>
    <div class="site-header__wrapper">
    <header class="site-header">
      <router-link to="/">
       <h2 class="site-header__main-heading"> edible calculator <span class="blink"> _</span></h2>
       </router-link>

    </header>

      <nav class="site-header__nav">
    <ul>
      <li class="site-header__nav-item">
          <router-link to="/decarb-time-calculator">Decarb time calculator</router-link>
      </li>
      <li class="site-header__nav-item">
                    <router-link to="/dosage-calculator">Edible dosage calculator</router-link>
      </li>
    </ul>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'site-header'
}
</script>

<style lang="scss" scoped>
.site-header{
  padding: 1vh 0;
    background-color: #192721;
    color:white;
  z-index: 99;
}
.site-header__main-heading{
  font-size: 2.7em;
}
h2{
    padding: 0 .5em;
    margin: 0;
    color:#32e28a;
    text-align: center;
}
.site-header__nav-item{
  float: none;
  display: block;
  text-align: center;
}
@media only screen and (min-width:600px) {

.site-header__nav-item{
  display: inline-block;
}

}
.site-header__nav {

  box-sizing: border-box;
  background-color: #1bc570;
  height: unset;

  a {
      font-size: 1.6em;
      color: rgb(15, 14, 15);
    &:hover,
    &.router-link-exact-active{
      color: white;
    }
  }
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
