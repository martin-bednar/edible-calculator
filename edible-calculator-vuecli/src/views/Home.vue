<template>
    <edible-article id="home-page"></edible-article>
</template>

<script>
import Article from '@/components/Article.vue'

export default {
  name: 'home',
  components: { 'edible-article': Article },
  metaInfo: {
      title: 'Edible calculator 🍍',
      // override the parent template and just use the above title only
      titleTemplate: null
    }
}
</script>
