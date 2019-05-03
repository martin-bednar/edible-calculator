<template>
  <div id="vue-root" class="container">
    <header style="margin-bottom: 1em;" class="flow-text">
      <h1 class="green-text text-darken-3">Edible dosage calculator</h1>
    </header>
    <section class="card-panel" style="font-size: 1.3em;">
      <div class="row">
        <div class="col s12 m5">
          What is the
          <b>weight of the cannabis</b> used?
        </div>
        <div class="col s8 m2">
          <input
            type="number"
            v-model="interaction.values[0]"
            v-on:input="handleChange(0)"
            step="0.1"
            v-on:blur="handleChange(1)"
          >
        </div>
        <div class="col s2">grams</div>
      </div>
      <div class="row">
        <div class="col s12 m5">
          What is the
          <b>percentage of THC</b> in the cannabis?
        </div>

        <div class="col s3 m2 l1">
          <span style="font-size: 0.9em;">{{interaction.values[1]}} %</span>
        </div>
        <div class="col s9 m4">
          <div class="range-field">
            <input
              type="range"
              v-model="interaction.values[1]"
              v-on:input="handleChange(1)"
              v-on:blur="handleChange(0)"
              min="0.1"
              max="40"
              step="0.1"
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m5">
          <b>Total amount of THC extracted:</b>
        </div>
        <div class="col s8 m2">
          <input
            type="number"
            v-model="interaction.values[2]"
            v-on:input="handleChange(2)"
            v-on:blur="handleChange(1)"
          >
        </div>
        <div class="col s2">mg</div>
      </div>
      <div class="row">
        <div class="col s12 m5">Number of portions:</div>
        <div class="col s8 m2">
          <input
            type="number"
            v-model="interaction.values[3]"
            v-on:input="handleChange(3)"
            v-on:blur="handleChange(1)"
          >
        </div>
        <div class="col s2">portions</div>
      </div>
      <div class="row">
        <div class="col s12 m5">THC per portion:</div>
        <div class="col s8 m2">
          <input
            type="number"
            v-model="interaction.values[4]"
            v-on:input="handleChange(4)"
            v-on:blur="handleChange(1)"
          >
        </div>
        <div class="col s3">mg per portion</div>
      </div>
      <div class="row">
        <div class="col s12 m7 push-m5">
          <div class="dose-indicator">
          <div v-if="interaction.values[4]<dosage.tiny">Tiny dose</div>
          <div v-else-if="interaction.values[4]<dosage.low">Low dose</div>
          <div v-else-if="interaction.values[4]<dosage.medium">Medium dose</div>
          <div v-else>High dose</div>
          </div>
        </div>
      </div>
    </section>
    <p class="flow-text">
      Have you already tested out the
      <router-link to="decarb-time-calculator">Decarb time calculator</router-link>?
    </p>
    <!--Dosage calc guide  / documentation-->
    <edible-article id="edible-dosage-calculator"></edible-article>

    <footer class="green-text text-darken-3">
      <div v-html="errors+''"></div>
    </footer>
  </div>
</template>
<script>
import Article from "@/components/Article.vue";
import Nicer from '@/js/Nicer.js';
import _DosageSolver from "@/js/DosageSolver.js";
var DosageSolver;
export default {
  name: "calculatorDosage",
  mounted: function() {
    DosageSolver = new _DosageSolver();
    this.handleChange(0);
  },
  data() {
    return {
      DosageSolver,
      interaction: {
        mWeed_grams: 1,
        potency_percent: 10,
        mTHC_miligrams: 60,
        nPortions: 3,
        mTHCPerPortion_miligrams: 20,
        values: [1, 10, 60, 3, 20]
      },
      errors: [],
      dosage: {
        /* Defaults to high */
        tiny: 3,
        low: 10,
        medium: 30
      }
    };
  },
  methods: {
    isValidNumber(value) {
      if (value == "") return false;
      if (value <= 0) return false;
      return true;
    },
    handleChange: function(_iDontChange) {
      if (this.interaction.values[_iDontChange] > 10000) {
        this.interaction.values[_iDontChange] = 10000;
      } else if (this.isValidNumber(this.interaction.values[_iDontChange])) {
        this.interaction.values = DosageSolver.SolveAll(
          this.interaction.values,
          _iDontChange
        );

        this.interaction.values = Nicer.getNiceArray(this.interaction.values, 10);
      } else {
        //
      }
    }
  },
  components: {
    "edible-article": Article
  }
};
</script>

<style>
.dose-indicator{
  border-radius: 3px;
  padding: 3px .5em;
  background-color: rgb(163, 206, 231);
  display: inline-block;
}
</style>
