const assert = require('chai').assert;
// get the function from anoher file
const subSum = require('./1.SubSum');

describe('subSum', function() {
    it('should work properly', function(){

        let arr = [1,2,3,4,5,6,7,8,9];

        let result = subSum(arr, 3, 5);

        assert.equal(result, 15);

    });

    // it('should work return 15', function(){

    //     let arr = [1,2,3,4,5,6,7,8,9];

    //     let result = subSum(arr, 3, 5);

    //     assert.equal(result, 16);

    // });

});

// run int terminal
// mocha .\SubSum.Test.js