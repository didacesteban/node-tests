const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

describe('Server', () => {
  describe('#helloWorld', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });
  describe('#users', () => {
    it('should return my user', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'didac',
            age: 26
          });
        })
        .end(done);
    });
  });
});
