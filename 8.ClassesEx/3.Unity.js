class Rat {
    constructor(name){
        this.name = name;
        this.ratsCollection = [];
    }

    unite(otherRar){
        if(otherRar instanceof Rat === true){
            this.ratsCollection.push(otherRar);
        }
    }

    getRats(){
        return this.ratsCollection;
    }

    toString(){
       let result = '';
       if(this.ratsCollection.length === 0){ 
           result += this.name + '\n';
       }
       else{
          this.ratsCollection.forEach(rat => {
              result += "##" + rat.name + '\n';
          });
       }
       return result;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
