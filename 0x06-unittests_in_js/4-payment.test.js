const sinon = require('sinon');

const sendPaymentRequestToApi = require('./4-payment.js');

const Utils = require('./utils.js');

const chai = require('chai');

describe('CalculateNumber', () => {
    const consoleSpy = sinon.spy(console, 'log');
    it('stub the calculateNumber function', () => {
	const stub = sinon.stub(Utils, 'calculateNumber');
	stub.withArgs('SUM', 100, 20).returns(10);
	sendPaymentRequestToApi(100, 20);
	chai.expect(consoleSpy.calledOnce).to.be.true;
	chai.expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
	stub.restore();
	consoleSpy.restore();
    });
});
