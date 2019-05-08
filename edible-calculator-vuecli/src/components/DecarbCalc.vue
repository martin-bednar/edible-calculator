<template>

  <div class="container">
    <header style="margin-bottom: 1em;" class="flow-text">
      <h1 class="green-text text-darken-3">Decarb time calculator</h1>
      <i>Decarboxylate your cannabis properly</i>
    </header>
    <section class="flow-text">
      <div class="row">
        <form action="#!" class="col s12 m6">
          <div class="card-panel">

            Processing temperature:
            <div class="range-field">
              <input type="range" min="98" max="150" name="temp" id="temp" v-model="userInput.temperature_degC"
                v-on:change="handleChange" v-on:input="handleChange" />
              <div style="display: flex; justify-content:space-around;">
                <span>{{userInput.temperature_degC}}
                  °C</span>
                <em>or</em>
                <span>{{computed.temperature_degF}}
                  °F</span>
              </div>
            </div>

          </div>
        </form>

      </div>
      <div class="row">
        <div>Full decarb time:
          <h2 class="orange-text text-darken-4"><span class="--result"> {{Math.round(computed.ideal_time)}}</span> min</h2>
        </div>
      </div>
      <p>

              <em class="--small-text message message--neutral">Don't forget to <strong>preheat</strong> the oven to {{userInput.temperature_degC}} °C ({{computed.temperature_degF}} °F) before you put the cannabis inside.</em>
      </p>
    </section>
    <!--Dosage calc guide  / documentation-->
    <edible-article id="decarb-time-calculator"></edible-article>

    <footer class="green-text text-darken-3">
      <div v-html="errors+''"></div>

    </footer>

  </div>
</template>
<style scoped>
.--small-text{
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.--result{
  border-bottom: .1em solid;
}
</style>
<script>

import Article from '@/components/Article.vue'
import Interpolator from '@/js/Interpolator.js'
import ValueCoordinates from '@/js/ValueCoordinates.js'

import _GAEventHandler from '@/js/GAEvents.js'

var GAEventHandler

export default {
  name: 'calculatorDecarb',
  mounted: function () {
    this.GAEventHandler = new _GAEventHandler(this.$ga)
  },
  data () {
    return {
      userInput: {
        temperature_degC: 120
      },
      computed: {
        ideal_time: 75,
        temperature_degF: 248
      },
      errors: [],
      interaction: {
        userHasInteracted: false
      }
    }
  },
  methods: {
    handleChange: function () {
      // 0. Init
      var data = []; var input = {}; var computed = {}
      // 1. Set data (temp,time in minutes)
      data.push(
        new ValueCoordinates(152, 15),
        new ValueCoordinates(138, 30),
        new ValueCoordinates(130, 45),
        new ValueCoordinates(120, 75),
        new ValueCoordinates(110, 120),
        new ValueCoordinates(100, 200),
        new ValueCoordinates(98, 240)
      )
      // 2. Get temp
      input.temp = this.userInput.temperature_degC
      // 3. set Ideal Time
      try {
        computed.ideal_time = Interpolator.InterpolateSmart(input.temp, data)
      } catch (error) {
        this.errors.push(error + '<br />')
      }
      // 4.Set farenheit temp
      computed.tempF = Math.round(input.temp * 1.8 + 32)
      // 6. Set App data
      this.computed.decarbPercentage = computed.percentage
      this.computed.ideal_time = computed.ideal_time
      this.computed.temperature_degF = computed.tempF

      // 7. Send GA Event
      if (!this.interaction.userHasInteracted) {
        this.GAEventHandler.SendFirstInteraction({ eventLabel: 'Decarb Time Calculator' })
        this.interaction.userHasInteracted = true
      }
    }
  },
  components: {
    'edible-article': Article
  }
}
</script>
