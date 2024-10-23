// tests/jsonld.test.ts
import { parseScalar, toScalarJson, parseVector, toVectorJson } from '../src/jsonld';

describe('JSON-LD operations', () => {
    test('should parse scalar JSON-LD', () => {
        expect(parseScalar({ "@type": "Scalar", "value": 1 })).toBe(1);
    });

    test('should convert scalar to JSON-LD', () => {
        expect(toScalarJson(1)).toEqual({ "@type": "Scalar", "value": 1 });
    });

    test('should parse vector JSON-LD', () => {
        expect(parseVector({ "@type": "Vector", "values": [1, 2] })).toEqual([1, 2]);
    });

    test('should convert vector to JSON-LD', () => {
        expect(toVectorJson([1, 2])).toEqual({ "@type": "Vector", "values": [1, 2] });
    });
});