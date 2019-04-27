<template>
    <div class="site-header__wrapper">
    <header class="site-header">
      <router-link to="/">
       <h2> edible calculator <span class="blink"> _</span></h2>
       </router-link>


    </header>
        
    
      <nav class="site-header__nav">
    <ul>
      <li>
          <router-link to="/decarb-time-calculator">Decarb time calculator</router-link>
      </li>
      <li>
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
  padding: 2em 1em;
    background-color: black;
    color:white;
  z-index: 99;
}
h2{
    padding: 0 .5em;
    margin: 0;
    color:#0caa63;
    text-align: center;
}
.site-header__nav {
  
  box-sizing: border-box;
  background-color: #0caa63;
  
  a {
      font-size: 1.6em;
      color: rgb(46, 43, 46);
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
