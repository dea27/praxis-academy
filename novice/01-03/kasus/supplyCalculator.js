var maxAge = 90;
    
    var calculateSupply = function(age, amountPerDay) {
      timeLeft = maxAge - age;
      amountPerDay = Math.round(amountPerDay); //converts floating point values to a round number
      amountConsumed = timeLeft * amountPerDay;
      var message = "anda perlu " + amountConsumed + " untuk bertahan sampai usia " + maxAge;
      console.log(message);
    }
    
    calculateSupply(34,7.8);
    calculateSupply(34,5);
    calculateSupply(34,100);