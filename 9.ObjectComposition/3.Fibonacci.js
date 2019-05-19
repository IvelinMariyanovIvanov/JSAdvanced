let fib = (function(){
    let firstNum=0;
    let secondNum = 1;
    let sum = 0;

    return function(){
        sum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = sum;

         console.log(firstNum);

         // return firstNum;
    }

})();

fib();
fib();
fib();
fib();
fib();
fib();