<!--
    This component provides the Edible Dosage Calculator with a documentation that is stored as a Markdown file.
-->
<template>
    <div>
    <vue-markdown>{{loadArticle(id)}}</vue-markdown>

    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import file_EdibleDosageCalculator from 'raw-loader!@/assets/articles/EdibleDosageCalculator.md'
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

        default:
          return 'Markdown file load error'
          break
      }
    }
  }
}
</script>

<style>

</style>
