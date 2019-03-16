// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};
    let i = 0;
    let money = currency;
    if (money >= 10000) {
        result['error'] = "You are rich, my friend! We don't have so much coins for exchange";
        }
    else {
        while (money >= 50) {
            i++;
            money = money - 50;
        }
        if (i !=0) { 
        result['H'] = i;
        i = 0;
        }

        while (money >= 25) {
            i++;
            money = money - 25;
        }
        if (i !=0) { 
        result['Q'] = i;
        i = 0;
        }

        while (money >= 10) {
            i++;
            money = money - 10;
        }
        if (i !=0) { 
        result['D'] = i;
        i = 0;
        }

        while (money >= 5) {
            i++;
            money = money - 5;
        }
        if (i !=0) { 
        result['N'] = i;
        i = 0;
        }

        while (money >= 1) {
            i++;
            money--;
        }
        if (i !=0) { 
        result['P'] = i;
        i = 0;
        }

    }
      return result;
}
