const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test the donors End point', test => {
  supertest(app)
    .get('/donors')
    .expect(200)
    .end((err, result) => {
      test.equal(
        result.body[0].name,
        'Farah',
        'this is the second test of the donors Endpoint'
      );
      test.end();
    });
});

tape('test POST donors endpoint', test => {
  supertest(app)
    .post('/donors')
    .expect(200)
    .end((err, result) => {
      test.equal(result.body, 1, 'testing the insert of post donors');
      test.end();
    });
});
