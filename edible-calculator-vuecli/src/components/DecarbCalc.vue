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
          <h2 class="orange-text text-darken-4">{{Math.round(computed.ideal_time)}} min</h2>
        </div>
      </div>
    </section>

    <footer class="green-text text-darken-3">
      <p><a href="http://eiha.org/media/2014/08/16-10-25-Decarboxylation-of-THCA-to-active-THC.pdf">Data source</a>
      </p>
      <div v-html="errors+''"></div>

    </footer>

  </div>
</template>
<script>
export default {
  name: 'calculatorDecarb',
  mounted: function () {
    this.handleChange()
  },
  data () {
    return {
      userInput: {
        temperature_degC: 120
      },
      computed: {
        ideal_time: 0,
        temperature_degF: 0
      },
      errors: []
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
        computed.ideal_time = InterpolateSmart(input.temp, data)
      } catch (error) {
        this.errors.push(error + '<br />')
      }
      // 4.Set farenheit temp
      computed.tempF = Math.round(input.temp * 1.8 + 32)
      // 6. Set App data
      this.computed.decarbPercentage = computed.percentage
      this.computed.ideal_time = computed.ideal_time
      this.computed.temperature_degF = computed.tempF
    }
  }
}
</script>
