const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      let result = utils.add(7, 65);

      expect(result).toBe(72).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });
  describe('#square', () => {
    it('should square the number entered', () => {
      let result = utils.square(7);

      expect(result).toBe(49).toBeA('number');
      // throw error without library
      // if(result !== 7*7){
      //   throw new Error(`Expected 49 but got ${result}`);
      // }
    });

    it('should async square the number entered', (done) => {
      utils.asyncSquare(2, (num) => {
        expect(num).toBe(4).toBeA('number');
        done();
      });
    });
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
});
