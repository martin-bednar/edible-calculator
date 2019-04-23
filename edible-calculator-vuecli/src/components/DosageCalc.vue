<template>
      <div id="vue-root" class="container">
    <header style="margin-bottom: 1em;" class="flow-text">
      <h1 class="green-text text-darken-3">Edible dosage calculator</h1>
    </header>
    <section class="card-panel" style="font-size: 1.3em;">
      <div class="row">
        <div class="col s12 m5">
            What is the <b>weight of the cannabis</b> used?
        </div>
        <div class="col s8 m2">
            <input type="number" v-model="interaction.values[0]" v-on:input="handleChange(0)" step="0.1" v-on:blur="handleChange(1)" />
          </div>
        <div class="col s2">
          grams
        </div>

      </div>
      <div class="row">
          <div class="col s12 m5">
              What is the <b>percentage of THC</b> in the cannabis?
          </div>

          <div class="col s3 m2 l1">

              <span style="font-size: 0.9em;">
                  {{interaction.values[1]}} %</span>
          </div>
          <div class="col s9 m4">
            <input type="range" v-model="interaction.values[1]" v-on:input="handleChange(1)" v-on:blur="handleChange(0)" min="0.1" max="40" step="0.1" />

            </div>

        </div>
        <div class="row">
            <div class="col s12 m5">
              <b>Total amount of THC extracted:</b>
            </div>
            <div class="col s8 m2">
                <input type="number" v-model="interaction.values[2]" v-on:input="handleChange(2)" v-on:blur="handleChange(1)" />
              </div>
            <div class="col s2">
              mg
            </div>

          </div>
          <div class="row">
              <div class="col s12 m5">
                  Number of portions:
              </div>
              <div class="col s8 m2">
                  <input type="number" v-model="interaction.values[3]" v-on:input="handleChange(3)" v-on:blur="handleChange(1)" />
                </div>
              <div class="col s2">
                portions
              </div>

            </div>
            <div class="row">
                <div class="col s12 m5">
                    THC per portion:
                </div>
                <div class="col s8 m2">
                    <input type="number" v-model="interaction.values[4]" v-on:input="handleChange(4)" v-on:blur="handleChange(1)" />
                  </div>
                <div class="col s3">
                  mg per portion
                </div>

              </div>
              <div class="row">
                
                <div class="col s12 m7 push-m5">
                  
                <div v-if="interaction.values[4]<dosage.tiny">Tiny dose</div>
                <div v-else-if="interaction.values[4]<dosage.low">Low dose</div>
                <div v-else-if="interaction.values[4]<dosage.medium">Medium dose</div>
                <div v-else>High dose</div>
                </div>
              </div>
   </section>
   <p class="flow-text">
     Have you already tested out the
   <router-link to="decarb-time-calculator">Decarb time calculator</router-link>?
  </p>
    <div class="row">
        <article class="col s12 m8 flow-text">
            <h2>About the edible dosage calculator</h2>

            <p>Here you can calculate the amount of THC (potency) of your cannabis edibles or <a href="https://www.leafly.com/news/lifestyle/recipe-how-to-make-basic-cannabutter">cannabutter</a>.</p>

            <p>Alternatively, you can use this calculator to figure out the weight of your cannabis needed to produce certain amount of THC in the finished product.</p>

            <h2>Usage guide</h2>

            <p>You are free to edit any of the variables of the THC extraction, so that you can either calculate the amount of cannabis needed to produce the desired potency of your edibles, or you can calculate the total amount of THC in your edibles by entering the amount of cannabis you started with.</p>

            <p>This calculator works most precisely for decarboxyled cannabis, so don't forget to <a href="https://www.leafly.com/news/cannabis-101/what-is-decarboxylation">decarboxylate</a> it first!</p>

            <h3>1. Weight of the cannabis used</h3>

            <p>Is the total dry weight of your starting product (cannabis) before the extraction.</p>

            <h3>2. Percentage of THC</h3>

            <p>The typical percentage of THC in your starting product goes usually like this:
                </p>
                <ul>
                <li> approx. 5% for <strong>uncut</strong> dried plant material. </li>
                <li> 7-14% for <strong>lower quality</strong> dried cannabis buds. </li>
                <li> 15-25% for <strong>higher quality</strong> dried cannabis buds. High quality cannabis usually doesn't contain any seeds or leaves and has been properly dried and cured. </li>
                </ul>
            <h3>3. Total amount of THC extracted</h3>

            <p>Is the total amount of psychoactive THC <em>(Δ-9-THC)</em> dissolved in your final extraction product.</p>

            <h2>How does it work? Calculations explained</h2>

            <p>This calculator assumes the conversion rate of <strong>60%</strong> (1 gram of 10% THC product transforms into 60 mg Δ-9-THC dissolved in oil).</p>

            <p>Several online tools assume a 100% conversion rate, which is not even theoretically possible! The highest rate possible in laboratory environment is around 87%, but in case of homemade edibles, it's typically even lower because of the limitations of equipment.</p>

        </article>
        </div>
    <footer class="green-text text-darken-3">
      <p>More features coming soon</p>
      <p>(C) ediblecalc.net, 2019</p>
      <div v-html="errors+''"></div>

    </footer>

  </div>

</template>
<script>
export default {
  name: 'calculatorDosage',
  mounted: function () {
    this.handleChange(0)
  },
  data () {
    return {
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
    }
  },
  methods: {
    handleChange: function (_iDontChange) {
      if (this.interaction.values[_iDontChange] > 10000) {
        this.interaction.values[_iDontChange] = 10000
      } else if (isValidNumber(this.interaction.values[_iDontChange])) {
        this.interaction.values = solveAll(this.interaction.values, _iDontChange)

        this.interaction.values = getNiceArray(this.interaction.values, 10)
      } else {
        //
      }
    },

  }
}
</script>
