const request = require('request');

const chai = require('chai'); 
describe('Index pages', () => {
    it('GET /', (done) => {
       const options = {
          url: 'http://localhost:7865',
          method: 'GET',
       };
       request(options, (error, response, body) => { 
        chai.expect(response.statusCode).to.equal(200);
        chai.expect(body).to.equal('Welcome to the payment system');
	done();
       });
    });
});
