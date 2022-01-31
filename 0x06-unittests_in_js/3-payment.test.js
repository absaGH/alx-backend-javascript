const sinon = require('sinon');

const sendPaymentRequestToApi = require('./3-payment.js');

const Utils = require('./utils.js');

const chai = require('chai');

describe('CalculateNumber', () => {
    it('spy on sendPaymentRequestToApi', () => {
	const spy = sinon.spy(Utils, 'calculateNumber');
	const result = sendPaymentRequestToApi(100, 20);
	chai.expect(spy.calledOnce).to.be.true;
	chai.expect(spy.calledWith('SUM', 100, 20)).to.be.true;
	spy.restore()
    });
});
