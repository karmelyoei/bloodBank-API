const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('test the Patients End point', test => {
  supertest(app)
    .get('/patient')
    .expect(200)
    .end((err, result) => {
      test.equal(
        result.body[0].name,
        'Karmel',
        'This is the third test of the endpoint Patients'
      );
      test.end();
    });
});

tape('test the  POST Patients End point', test => {
  supertest(app)
    .post('/patient')
    .expect(200)
    .end((err, result) => {
      test.equal(result.body, 1, 'TEST POST Patients');
      test.end();
    });
});
