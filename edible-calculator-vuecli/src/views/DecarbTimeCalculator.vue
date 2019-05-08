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
    title: 'Cannabis decarb time calculator',
    meta: [
      { vmid: 'description', name: 'description', content: 'Cannabis decarb time calculator. Easy-to-use tool for creating potent THC-infused edibles. Edible decarboxylation temperature calculator' }
    ]
  },
  components: { calculatorDecarb }
}
</script>
