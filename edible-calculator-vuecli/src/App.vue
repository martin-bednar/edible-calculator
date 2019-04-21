<template>
  <div id="app">
    <div id="nav">
    <ul>
      <li> 
          <router-link to="/decarb-time-calculator">Decarb time calculator</router-link> 
      </li>
      <li>
                    <router-link to="/dosage-calculator">Edible dosage calculator</router-link> 

      </li>
    </ul></div>

    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Inconsolata', monospace;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
