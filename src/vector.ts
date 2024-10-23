export const addVectors = (a: number[], b: number[]): number[] | null => {
    if (a.length !== b.length) return null; // Handle different lengths
    return a.map((value, index) => value + b[index]);
  };
  
  export const subtractVectors = (a: number[], b: number[]): number[] | null => {
    if (a.length !== b.length) return null;
    return a.map((value, index) => value - b[index]);
  };
  
  export const multiplyVectors = (a: number[], b: number[]): number[] | null => {
    if (a.length !== b.length) return null;
    return a.map((value, index) => value * b[index]);
  };
  
  export const divideVectors = (a: number[], b: number[]): number[] | null => {
    if (a.length !== b.length || b.some(value => value === 0)) return null; // Handle different lengths or division by zero
    return a.map((value, index) => value / b[index]);
  };