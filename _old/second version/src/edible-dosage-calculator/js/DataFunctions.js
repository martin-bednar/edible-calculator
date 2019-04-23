class ValueCoordinates {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
  }
}

function InterpolateLinear(input_x, data) {
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
  var x_range = high.x - low.x; //Range of possible values between low and high (e.g. for low=5 and high=15 => range=10)
  var ratio = (input_x - low.x) / x_range; //A number between 0 and 1 specifying the position of the input number between low and high

  var y_computed = low.y + (high.y - low.y) * ratio;

  var output = y_computed;
  return output;
}

function sortData(_data) {
  var data = _data;
  data.sort(function (a, b) {
    return (a.x - b.x);
  });
  return data;
}

function InterpolateSmart(input_x, _data) {
  /*
  Data argument structure:
  data = [ValueCoordinates]
  */
  var data = sortData(_data);
  var first = data[0];
  var last = data[data.length - 1];

  if (input_x < first.x || input_x > last.x) {
    throw new RangeError("The input_x argument must be between " + first.x + " and " + last.x + " .");
  }

  var i = 1; //i will reference to the higher of the two known values
  while (i < data.length) {
    if (input_x < data[i].x) {
      //Position found
      var dataToPass = {
        low: data[i - 1],
        high: data[i]
      };
      return InterpolateLinear(input_x, dataToPass);
    }
    i++;
  }
  throw new RangeError("The input_x argument must be between " + first.x + " and " + last.x + " .");


}

function Test() {
  var data = new Array();
  data.push(
    new ValueCoordinates(15, 152),
    new ValueCoordinates(30, 138),
    new ValueCoordinates(45, 130),
    new ValueCoordinates(75, 120),
    new ValueCoordinates(120, 110),
    new ValueCoordinates(200, 100),
    new ValueCoordinates(240, 98)
  );
  for (var i = 15; i <= 240; i += 10) {
    console.log(InterpolateSmart(i, data));
  }
  console.log(InterpolateSmart(30, data));
}

function Compute(i, values) {
  var mWeed, potency, mTHCTotal, nPortions, mTHCPortion;
  mWeed = values[0];
  potency = values[1];
  mTHCTotal = values[2];
  nPortions = values[3];
  mTHCPortion = values[4];
  var result;
  switch (i) {
    case (0): //mWeed
      result = mTHCTotal / (potency * 0.006 * 1000);
      break; //mWeed = mTHCTotal/(potency*0.006)

    case (1): //potency
      result = mTHCTotal / (mWeed * 0.006 * 1000);
      break; //potency = mTHCTotal/(mWeed*0.006)

    case (2): //mTHCTotal
      result = mWeed * (potency / 100) * 0.6 * 1000;
      if (!(typeof result == 'number' && isFinite(result))) { //if can't solve this way, try with portions
        result = mTHCPortion * nPortions;
      }
      break; //mTHCTotal = mWeed*(potency/100)*0.6*1000 mg

    case (3): //nPortions
      result = mTHCTotal / mTHCPortion;
      break; //nPortions = mTHCTotal/mTHCPortion

    case (4): //mTHCPortion
      result = mTHCTotal / nPortions;
      break; //mTHCPortion = mTHCTotal/nPortions

    default:
      result = 0;
      break;
  }
  return result;
}


function solveBlank(_values) { //vyplní prázdná pole
  values = _values;
  for (var i = 0; i < values.length; i++) {
    if (values[i] == "") {
      values[i] = this.Compute(i, values);
    }
  }
  return values;
}

function solveAll(_values, _iDontChange) {
  /*COMPUTE*/
  //Prázdné hodnoty
  values = solveBlank(_values);
  //Kolize
  /* pořadí
                  1. mTHCTotal
                  2. mTHCPortion
                  3. mWeed
                  4. nPortions
                  5. potency
                  (6. Změněné pole)
          */
  var order = [2, 4, 0, 3, 1]; //sestavení pořadí
  var j;
  for (var i = 0; i < values.length; i++) { //Neřeší vše, dočasné...
    j = order[i]; //přiřazení pořadí
    if (j != _iDontChange) {
      values[j] = this.Compute(j, values);
    }

  }
  return values;
}

function roundByStep(n, step) {
  return (Math.round(n * step) / step);

}

function getNiceValue(_val, _precision) {
  var newVal = this.roundByStep(_val, _precision);
  newVal = newVal.toString();
  if (newVal[0] == "0") {
    newVal.substr(1);
  }
  return newVal;
}

function getNiceArray(_input, _precision){
  var niceArray = [];
  _input.forEach(element => {
    niceArray.push(getNiceValue(element, 10));
});
  return niceArray;
}

function isValidNumber(value){
  if (value=="") return false;
  if (value<=0) return false;
  return true;
}