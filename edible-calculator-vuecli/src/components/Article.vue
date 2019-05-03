<!--
    This component provides the Edible Dosage Calculator with a documentation that is stored as a Markdown file.
-->
<template>
    <article class="article">
    <vue-markdown>{{loadArticle(id)}}</vue-markdown>
    </article>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import file_EdibleDosageCalculator from 'raw-loader!@/assets/articles/EdibleDosageCalculator.md'
import file_DecarbTimeCalculator from 'raw-loader!@/assets/articles/DecarbTimeCalculator.md'
import file_HomePage from 'raw-loader!@/assets/articles/HomePageDescription.md'
export default {
  components: {
    'vue-markdown': VueMarkdown
  },
  props: {
    id: String
  },
  methods: {
    loadArticle: function (id) {
      switch (id) {
        case 'edible-dosage-calculator':
          return file_EdibleDosageCalculator
          break
        case 'decarb-time-calculator':
          return file_DecarbTimeCalculator
          break
        case 'home-page':
          return file_HomePage
          break

        default:
          return 'Markdown file load error'
          break
      }
    }
  }
}
</script>

<style>
.article{
  display: flex;
  justify-content: center;
  font-weight: 300;
}
.article strong{
    font-weight: 400;
    color: #032212;
}
  .article h2, .article h3{
    font-size: 2.2em;
  }
  .article ul,.article p{
    max-width: 30em;
    text-align: justify;
    font-size: calc(1.3em + 0.5vw);
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color:black;
  }
  .article ul li{
    list-style-type: circle;
  }
</style>
