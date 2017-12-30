const utils = require('./utils');

it('should add two numbers', () => {
  let result = utils.add(7, 65);

  if(result !== 72){
    throw new Error(`Expected 72 but got ${result}`);
  }
});

it('should square the number entered', () => {
  let result = utils.square(7);

  if(result !== 7*7){
    throw new Error(`Expected 49 but got ${result}`);
  }
});
