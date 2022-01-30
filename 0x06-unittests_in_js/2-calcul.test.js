const calculateNumber = require("./2-calcul_chai.js");

const chai = require("chai");

const expect = chai.expect;

describe('calculateNumber Sum', () => {
    it('check result', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
        expect(calculateNumber('SUM', 1.2, 3)).to.equal(4);
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
        expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
});

describe('calculateNumber Subtract', () => {
    it('check result', () => {
 	expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
        expect(calculateNumber('SUBTRACT', 1.2, 1.2)).to.equal(0);
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', 4.1, 1)).to.equal(3);
    });
});

describe('calculateNumber Divide', () => {
    it('check result', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
	expect(calculateNumber('DIVIDE', 1, 4.5)).to.equal(0.2);
	expect(calculateNumber('DIVIDE', 0.0, 1)).to.equal(0);
	expect(calculateNumber('DIVIDE', -4, 2)).to.equal(-2);
	expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
