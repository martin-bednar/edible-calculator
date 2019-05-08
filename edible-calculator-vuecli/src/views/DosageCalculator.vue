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
    title: 'Edible dosage calculator',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content:
          'Edible potency calculator. THC dosage tool. Find out how much extracted THC is in your cannabutter and edibles. THC content per portion'
      }
    ]
  },
  components: { calculatorDosage }
}
</script>
