const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let result = utils.add(7, 65);

  expect(result).toBe(72).toBeA('number');
});

it('should square the number entered', () => {
  let result = utils.square(7);

  expect(result).toBe(49).toBeA('number');
  // throw error without library
  // if(result !== 7*7){
  //   throw new Error(`Expected 49 but got ${result}`);
  // }
});

it('should set first name and last name', () => {
  let user = {
    age: 25,
    location: 'Terrassa'
  };

  let res = utils.setName(user, 'Didac Esteban');

  expect(res).toInclude({
    firstName: 'Didac',
    lastName: 'Esteban'
  });
});
