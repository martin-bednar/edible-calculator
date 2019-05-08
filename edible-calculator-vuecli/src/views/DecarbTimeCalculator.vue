<template>
    <div>
        <calculatorDecarb/>
    </div>
</template>
<script>
import calculatorDecarb from '@/components/DecarbCalc.vue'
export default {
  name: 'Decarb Time Calculator',
  metaInfo: {
    title: 'Cannabis decarb time calculator'
  },
  components: { calculatorDecarb }
}
</script>
