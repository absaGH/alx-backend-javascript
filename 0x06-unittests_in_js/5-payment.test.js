const sinon = require('sinon');

const sendPaymentRequestToApi = require('./5-payment.js');

const Utils = require('./utils.js');

const chai = require('chai');

describe('CalculateNumber', () => {
    beforeEach(() => {
	consoleSpy = sinon.spy(console, 'log');
    });
    afterEach(() => {
	consoleSpy.restore();
	sinon.restore();
    });
    it('check result of calculateNumber function', () => {
	const spy = sinon.spy(Utils, 'calculateNumber');
	sendPaymentRequestToApi(100, 20);
	chai.expect(consoleSpy.calledOnce).to.be.true;
	chai.expect(consoleSpy.calledWith('The total is: 120')).to.be.true;	
    });
    it('check result of calculateNumber function', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');                                                       
        sendPaymentRequestToApi(10, 10);
        chai.expect(consoleSpy.calledOnce).to.be.true;
        chai.expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    });
});
