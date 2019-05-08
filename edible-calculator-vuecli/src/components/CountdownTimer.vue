<template>
  <div id="countdown">
      <h3>Countdown</h3>
    <div v-if="finished">
    <button class="btn disabled">Timer finished</button>
        <button v-on:click="Start" class="btn">Set timer</button>
    </div>
    <div v-else>
      <div v-if="started">
          <div>
          Time remaining: {{FormatTimestamp(countdown.remaining_ms)}}
          <br />
           out of {{countdown.length_minutes}} minutes.
           </div>
        
        <button class="btn bg-red" v-on:click="Abort">Stop timer</button>
      </div>

      <div v-else>
        <button v-on:click="Start" class="btn">Set timer for {{input_timespan}} minutes</button>
      </div>
    </div>
  </div>
</template>

<style>
#countdown{
    border-top: 1px solid green;
    border-bottom: 1px solid green;
    padding: 1em 0;
}
</style>

<script>
import { setInterval } from "timers";
export default {
  name: "countdown-timer",
  props: ["input_timespan"],
  data() {
    return {
      started: false,
      finished: false,
      countdown: {
        date_start: 0,
        date_end: 0,
        length_minutes: 0,
        remaining_ms: 0,
        intervalID: 0
      }
    };
  },
  methods: {
    Start: function() {
      var time_total_miliseconds = this.input_timespan * 60 * 1000;
      var now = Date.now();
      this.countdown.date_start = now;
      this.countdown.date_end = now + time_total_miliseconds;
      this.countdown.length_minutes = this.input_timespan;

      this.intervalID = setInterval(() => {
        this.Tick();
      }, 100);
      this.started = true;
    },
    GetRemaining: function() {
      var now = Date.now();
      return this.countdown.date_end - now;
    },
    FormatTimestamp: (_timestamp) => {
        var timestamp_sec = Math.floor(_timestamp / 1000);
        var seconds = timestamp_sec % 60;
        var remaining = timestamp_sec - seconds;
        var minutes = Math.floor((timestamp_sec % 3600) / 60);
        var hours = Math.floor((timestamp_sec) / 3600);

        return (hours + " h " + minutes + " min " + seconds + " s ")
    },
    Tick: function() {
      var remaining = this.GetRemaining();

      if (remaining <= 0) {
        this.finished = true;
      }

      this.countdown.remaining_ms = remaining;
    },
    Abort: function() {
        clearInterval(this.intervalID);
        this.started = false;
    }
  }
};
</script>
