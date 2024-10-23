// tests/scalar.test.ts
import { add, subtract, multiply, divide } from '../src/scalar';

describe('Scalar operations', () => {
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('should subtract two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('should multiply two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('should divide two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('should return null for division by zero', () => {
    expect(divide(4, 0)).toBeNull();
  });
});