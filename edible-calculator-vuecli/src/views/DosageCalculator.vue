<template>
    <div>
        <calculatorDosage/>
    </div>
</template>
<script>
import calculatorDosage from '@/components/DosageCalc.vue'
export default {
  name: 'Edible dosage calculator',
    metaInfo: {
    title: 'Edible dosage calculator'
  },
  components: { calculatorDosage }
}
</script>
