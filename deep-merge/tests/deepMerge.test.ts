import deepMerge from "../deepMerge";

describe('Deep Merge', () => {
    it('shoult merge simple objects with unique keys', () => {
        expect(deepMerge({a: 1}, {b: 2})).toEqual({a: 1, b: 2});
    });

    it('shoult merge simple objects with non-unique keys', () => {
        expect(deepMerge({a: 1}, {a: 2})).toEqual({a: 2});
        expect(deepMerge({a: [1]}, {a: [2]})).toEqual({a: [1, 2]});
        expect(deepMerge({a: [1]}, {a: 2})).toEqual({a: [1, 2]});
        expect(deepMerge({a: 1}, {a: [2]})).toEqual({a: [1, 2]});
    });

    it('should merge nested objects', () => {
        expect(deepMerge({a: {b: 1}}, {a: {b: 2}})).toEqual({a: {b: 2}});
        expect(deepMerge({a: {b: [1]}}, {a: {b: 2}})).toEqual({a: {b: [1, 2]}});
        expect(deepMerge({a: {b: [1]}}, {a: {b: 2, c: 3}})).toEqual({a: {b: [1, 2], c: 3}});
    });
});