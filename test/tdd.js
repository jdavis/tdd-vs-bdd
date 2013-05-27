var assert = require('assert'),
    factorial = require('../index');


suite('Test', function (){
    setup(function (){
        // Create any objects that we might need
    });

    suite('#factorial()', function (){
        test('equals 1 for sets of zero length', function (){
            assert.equal(1, factorial(0));
        });

        test('equals 1 for sets of length one', function (){
            assert.equal(1, factorial(1));
        });

        test('equals 2 for sets of length two', function (){
            assert.equal(2, factorial(2));
        });

        test('equals 6 for sets of length three', function (){
            assert.equal(6, factorial(3));
        });
    });
});
