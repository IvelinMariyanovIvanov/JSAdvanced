class SortedList{
    constructor(){
        this.collection = [];
        this.size = 0;
    }

    add(element){
        this.collection.push(element);
        this.size ++;

        // this.sort();

        this.collection = this.collection.sort((a,b) => (a -b));
    }

    remove(index){
        if(index >= 0 && index < this.collection.length){
            this.collection.splice(index, 1);
            this.size --;
        }
    }

    get(index){
            return this.collection[index];   
    }

    getAllElements(){
        return this.collection;
    }

    // sort(){
    //     return this.collection.sort((a,b) => (a -b))
    // }
}

let list = new SortedList();

(list.add(1));
console.log(list.getAllElements());

(list.add(2));
console.log(list.getAllElements());

(list.add(3));
console.log(list.getAllElements())


console.log(list.size)

