 function sortedList(){

        return (function(){
        let arr = [];
        let size = 0;

        function add(element){
            arr.push(element);
            arr.sort((a,b)=> a-b);
            this.size++;
        }

        function remove(index){
            if(validateIndex(index)){
                arr.splice(index, 1);
                this.size--;
            } 
        }

       function get(index) {
            if(validateIndex(index)){
               return arr[index];
            }
        }

        function validateIndex(index) {
            return index >= 0 && index < arr.length;
        }

        return {
            add,
            remove,
            get,
            size
        }
    })();

    //return sort;
}

let s = sortedList();
s.add(1);
s.add(2);
s.remove(1);

console.log(s.size);