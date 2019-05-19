function number(){
    let privateCounter = 0;

    function privateCount() {
        privateCounter++;
        console.log(privateCounter);
    }

    return privateCount;
}

let c = number();

c();
c();
c();
c();
c();
console.log(c.privateCounter);

