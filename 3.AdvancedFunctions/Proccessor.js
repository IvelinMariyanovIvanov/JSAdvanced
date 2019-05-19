function proccesor() {
    let myString = 'test';

    return {
        append: (str) => {myString += str},
        removeStart: (n) => {myString = myString.slice(n)},
        removeEnd:(n) => { myString = myString.slice(myString.length - n)},
        print: () => {console.log(myString)}
    }
}

const myProccessor = proccesor();
myProccessor.print();

myProccessor.append('aaaaaaa');
myProccessor.print();