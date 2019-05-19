let moduleObj = {
    number: 0,
    increase: function(value){ return this.number += value },
    decrease: function(value){ return this.number -= value },
    value: function(){ return this.number}
};

moduleObj.number = 2; // the number is accesible;

console.log(moduleObj.value())
console.log(moduleObj.increase(5));
console.log(moduleObj.decrease(1));

  