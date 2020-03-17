const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test the bloodBank End point', test => {
  supertest(app)
    .get('/blood-banks')
    .expect(200)
    .end((err, result) => {
      test.equal(
        result.body[0].name,
        'Alymama',
        'this is the first test of the bankblood Endpoint'
      );
      test.end();
    });
});

tape('test the POST bloodBank End point', test => {
  supertest(app)
    .post('/blood-banks')
    .expect(200)
    .end((err, result) => {
      test.equal(result.body, 1, 'POST bankblood Endpoint');
      test.end();
    });
});
