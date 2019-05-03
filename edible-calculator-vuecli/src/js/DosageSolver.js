export default class DosageSolver{
    Compute(i, values) {
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

      SolveBlank(_values) { //vyplní prázdná pole
        var values = _values;
        for (var i = 0; i < values.length; i++) {
          if (values[i] == "") {
            values[i] = this.Compute(i, values);
          }
        }
        return values;
      }

      SolveAll(_values, _iDontChange) {
        /*COMPUTE*/
        //Prázdné hodnoty
        var values = this.SolveBlank(_values);
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
      
}