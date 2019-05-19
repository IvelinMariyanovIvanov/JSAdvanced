let extension = function(){

    Array.prototype.last = function(){
        return this[this.length -1];
    }

    Array.prototype.skip = function(index) {
        return this.slice(index);
    }

    Array.prototype.take = function(index) {
        return this.slice(0, index);
    }

    Array.prototype.sum = function() {
        return this.reduce((a,b)=> a +b);
    }
    Array.prototype.average = function() {
        return this.sum() / this.length;
    }

}();