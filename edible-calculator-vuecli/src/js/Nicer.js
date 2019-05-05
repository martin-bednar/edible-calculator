export default class Nicer {
  static roundByStep (n, step) {
    return (Math.round(n * step) / step)
  }

  static getNiceValue (_val, _precision) {
    var newVal = this.roundByStep(_val, _precision)
    newVal = newVal.toString()
    if (newVal[0] == '0') {
      newVal.substr(1)
    }
    return newVal
  }

  static getNiceArray (_input, _precision) {
    var niceArray = []
    _input.forEach(element => {
      niceArray.push(this.getNiceValue(element, 10))
    })
    return niceArray
  }
}
