// tests/vector.test.ts
import { addVectors, subtractVectors, multiplyVectors, divideVectors } from '../src/vector';

describe('Vector operations', () => {
  test('should add two vectors', () => {
    expect(addVectors([1, 2], [3, 4])).toEqual([4, 6]);
  });

  test('should subtract two vectors', () => {
    expect(subtractVectors([3, 4], [1, 2])).toEqual([2, 2]);
  });

  test('should return null for vectors of different lengths', () => {
    expect(addVectors([1, 2], [1, 2, 3])).toBeNull();
  });

  test('should handle division of vectors', () => {
    expect(divideVectors([6, 8], [2, 4])).toEqual([3, 2]);
  });

  test('should return null when dividing by zero in vectors', () => {
    expect(divideVectors([6, 8], [2, 0])).toBeNull();
  });
});