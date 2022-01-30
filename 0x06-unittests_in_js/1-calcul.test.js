const calculateNumber = require("./1-calcul.js");

const assert = require("assert");

describe('calculateNumber', () => {
    it('check result', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3), 4);
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 4.5, 1.4), 6);
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
	
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 1.2), 0);
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
        assert.strictEqual(calculateNumber('SUBTRACT', 4.1, 1), 3);
        	
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	assert.strictEqual(calculateNumber('DIVIDE', 1, 4.5), 0.2);
	assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1), 2);
	assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
