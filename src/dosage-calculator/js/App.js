
        var app = new Vue({
            el: "#vue-root",
            mounted: function() {
                this.handleChange(0);
            },
            data : {
                interaction: {
                    mWeed_grams: 1,
                    potency_percent: 10,
                    mTHC_miligrams: 60,
                    nPortions : 1,
                    mTHCPerPortion_miligrams : 60,
                    values: [1,10,60,1,60]
                },
                errors: []
            },
            methods: {
                handleChange: function(_iDontChange){
                    if(this.interaction.values[_iDontChange]>10000){
                        this.interaction.values[_iDontChange]=10000;
                    }
                    else if (isValidNumber(this.interaction.values[_iDontChange])){

                        this.interaction.values = solveAll(this.interaction.values,_iDontChange);
                    
                        this.interaction.values = getNiceArray(this.interaction.values, 10);
    
                    }
                    else {
                        //
                    }
                }
            }
        })