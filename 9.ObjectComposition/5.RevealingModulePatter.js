let revModule = (function(){

    let number = 0;

    function change(value){return number += value};
    function increase(value){return change(value)};
    function decrease(value) {return change(-value)};
    function value() {return number};

    return {
        increase,
        decrease,
        value
    }
})();

console.log(revModule.value());
console.log(revModule.increase(5));
console.log(revModule.decrease(1));
console.log(revModule.number);
console.log(revModule.value());


