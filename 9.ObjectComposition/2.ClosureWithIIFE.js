let count = (function(){
    let counter = 0;

    return function privateCount() {
        counter++;
        console.log(counter);
    }

 //   return privateCount;
})();

count();
count();

count.counter = 9;
console.log(count.counter)