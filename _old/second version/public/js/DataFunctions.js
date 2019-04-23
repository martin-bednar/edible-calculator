class ValueCoordinates{
    constructor(x,y){
        this.x = x||0;
        this.y = y||0;
    }
}
function InterpolateLinear(input_x,data){
    /*
    Data argument structure:
    data{
        low : ValueCoordinates, //Higher X-coordinate
        high : ValueCoordinates
    }

    Returns ValueCoordinates
    */
    var low = data.low;
    var high = data.high;
    var x_range = high.x-low.x; //Range of possible values between low and high (e.g. for low=5 and high=15 => range=10)
    var ratio = (input_x - low.x) / x_range; //A number between 0 and 1 specifying the position of the input number between low and high

    var y_computed = low.y + (high.y-low.y) * ratio;

    var output = y_computed;
    return output;
}
function sortData(_data){
    var data = _data;
    data.sort(function(a,b){
        return (a.x - b.x);
    });
    return data;
}
function InterpolateSmart(input_x,_data){
    /*
    Data argument structure:
    data = [ValueCoordinates]
    */
    var data = sortData(_data);
    var first = data[0];
    var last = data[data.length - 1];

    if(input_x<first.x||input_x>last.x){
        throw new RangeError("The input_x argument must be between "+first.x+" and "+last.x+" .");
    }

    var i = 1; //i will reference to the higher of the two known values
    while(i<data.length){
        if(input_x<data[i].x){
            //Position found
            var dataToPass = {
                low: data[i-1], 
                high: data[i]};
            return InterpolateLinear(input_x,dataToPass);
        }
        i++;
    }
    throw new RangeError("The input_x argument must be between "+first.x+" and "+last.x+" .");


}

function Test(){
    var data = new Array();
    data.push(
        new ValueCoordinates(15,152),
        new ValueCoordinates(30,138),
        new ValueCoordinates(45,130),
        new ValueCoordinates(75,120),
        new ValueCoordinates(120,110),
        new ValueCoordinates(200,100),
        new ValueCoordinates(240,98)
    );
    for(var i=15;i<=240;i+=10){
    console.log(InterpolateSmart(i,data));
    }
    console.log(InterpolateSmart(30,data));
}