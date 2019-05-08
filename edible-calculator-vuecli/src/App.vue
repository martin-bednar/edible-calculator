<template>
  <div id="app">
    <site-header/>

    <router-view id="main-content"/>

    <site-footer/>
  </div>
</template>
<script>
import SiteHeader from "@/components/Header.vue";
import SiteFooter from "@/components/Footer.vue";
export default {
  name: "App",
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "🔥 Edible calculator 🔥",
    // all titles will be injected into this template
    titleTemplate: "%s | 🍍 Edible calculator",
    // Defaults:
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { vmid: 'description', name: "description", content: "Cannabis edible toolkit. Improve your cannabutter and edibles! Find out decarb time with Decarb time calculator. Measure edible potency with Edible dosage calculator." },
      { 'http-equiv': 'X-UA-Compatible', 'content' : 'ie=edge' }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.ediblecalc.net/' },

      // Icons
      { rel: 'shortcut icon', href: '/img/icons/favicon.ico' },
      { rel: 'icon', href: '/img/icons/favicon.ico' },

      // Fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Inconsolata' },

      // CSS
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css' }
]
  },
  components: { SiteHeader, SiteFooter }
};
</script>

<style lang="scss">
#main-content {
  padding: 4em 1em;
}
#app {
  font-family: "Inconsolata", monospace;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  min-height: 100vh;
  grid-template: auto 1fr auto / 100%;
}
a {
  color: #0c9751;
}
.message {
  border-radius: 3px;
  padding: 3px 0.5em;
  display: inline-block;
}
.message--neutral {
  background-color: rgba(163, 206, 231, 0.8);
}
.message--important {
  background-color: rgba(231, 165, 163, 0.8);
}
</style>
