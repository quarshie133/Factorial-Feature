var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('result is 120 if the input 5.', () => {
            // setup
      const inputNumber = 5;
      const expectedResult = 120;
            //exercise
      const result = Calculate.factorial(inputNumber)
            //verify
      assert.equal(result, expectedResult)

    });

     it('result 6 if the input is 3.', () => {
      //setup
       const inputNumber = 3;
       const expectedResult = 6;
            //exercise
       const result = Calculate.factorial(inputNumber)
            //verify
       assert.equal(result, expectedResult)
    });