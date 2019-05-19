function argument(){

    let summary = {};

    for (let index = 0; index < arguments.length; index++) {
       
        const obj = arguments[index];
        let type = typeof(obj);
        console.log(type + ': ' + obj);
      
        if(!summary[type]){
            summary[type] =  1;
        } else {
            summary[type]++;
        }
      
    }
    console.log(summary);

    let sortedTypes = [];

    for (const property in summary) {
        sortedTypes.push([property, summary[property]]);
    }

    for (let index = 0; index < sortedTypes.length; index++) {
        
        const element = sortedTypes[index];
        let type = typeof(element);
        
        console.log(element);
    }
}

 argument('cat', 42, function () { console.log('Hello world!'); })