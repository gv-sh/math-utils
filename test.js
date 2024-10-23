const mathUtils = require('./dist/index');
const assert = require('assert');

// Scalar operations
assert.strictEqual(mathUtils.add(2, 3), 5);
assert.strictEqual(mathUtils.subtract(2, 3), -1);
assert.strictEqual(mathUtils.multiply(2, 3), 6);
assert.strictEqual(mathUtils.divide(4, 2), 2);
assert.strictEqual(mathUtils.divide(4, 0), null);

// Vector operations
assert.deepStrictEqual(mathUtils.addVectors([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
assert.strictEqual(mathUtils.addVectors([1, 2], [3]), null);
assert.deepStrictEqual(mathUtils.subtractVectors([4, 5, 6], [1, 2, 3]), [3, 3, 3]);
assert.strictEqual(mathUtils.subtractVectors([1, 2], [3]), null);
assert.deepStrictEqual(mathUtils.multiplyVectors([1, 2, 3], [4, 5, 6]), [4, 10, 18]);
assert.strictEqual(mathUtils.multiplyVectors([1, 2], [3]), null);
assert.deepStrictEqual(mathUtils.divideVectors([4, 6, 8], [2, 3, 4]), [2, 2, 2]);
assert.strictEqual(mathUtils.divideVectors([4, 6, 8], [0, 3, 4]), null);
assert.strictEqual(mathUtils.divideVectors([4, 6], [2]), null);

// JSON-LD support
// Test cases for Scalar JSON-LD
const scalarJson1 = { "@type": "Scalar", value: 42 };
const scalarJson2 = { "@type": "NotScalar", value: 42 };
const scalarJson3 = { "@type": "Scalar", value: null };

assert.strictEqual(mathUtils.parseScalar(scalarJson1), 42);
assert.strictEqual(mathUtils.parseScalar(scalarJson2), null);
assert.strictEqual(mathUtils.parseScalar(scalarJson3), null);

assert.deepStrictEqual(mathUtils.toScalarJson(42), { "@type": "Scalar", "value": 42 });
assert.deepStrictEqual(mathUtils.toScalarJson(0), { "@type": "Scalar", "value": 0 });

// Test cases for Vector JSON-LD
const vectorJson1 = { "@type": "Vector", values: [1, 2, 3] };
const vectorJson2 = { "@type": "NotVector", values: [1, 2, 3] };
const vectorJson3 = { "@type": "Vector", values: [] };

assert.deepStrictEqual(mathUtils.parseVector(vectorJson1), [1, 2, 3]);
assert.strictEqual(mathUtils.parseVector(vectorJson2), null);
assert.deepStrictEqual(mathUtils.parseVector(vectorJson3), []);

assert.deepStrictEqual(mathUtils.toVectorJson([1, 2, 3]), { "@type": "Vector", "values": [1, 2, 3] });
assert.deepStrictEqual(mathUtils.toVectorJson([]), { "@type": "Vector", "values": [] });
