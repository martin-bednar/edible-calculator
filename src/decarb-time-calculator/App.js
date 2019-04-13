
        var app = new Vue({
            el: "#vue-root",
            mounted: function() {
                this.handleChange();
            },
            data : {
                userInput : {
                    temperature_degC: 120,
                },
                computed: {
                    ideal_time: 0,
                    temperature_degF: 0
                },
                errors: []
            },
            methods: {
                handleChange: function(){
                    //0. Init
                    var data=[], input={}, computed={};
                    //1. Set data (temp,time in minutes)
                    data.push(
                        new ValueCoordinates(152,15),
                        new ValueCoordinates(138,30),
                        new ValueCoordinates(130,45),
                        new ValueCoordinates(120,75),
                        new ValueCoordinates(110,120),
                        new ValueCoordinates(100,200),
                        new ValueCoordinates(98,240)
                        );
                    //2. Get temp
                    input.temp = this.userInput.temperature_degC;
                    //3. set Ideal Time
                    try {
                    computed.ideal_time = InterpolateSmart(input.temp,data);
                    } catch (error) {
                        this.errors.push(error+"<br />");
                    }
                    //4.Set farenheit temp
                    computed.tempF = Math.round(input.temp * 1.8 + 32);
                    //6. Set App data
                    this.computed.decarbPercentage = computed.percentage;
                    this.computed.ideal_time = computed.ideal_time;
                    this.computed.temperature_degF = computed.tempF;
                }
            }
        })