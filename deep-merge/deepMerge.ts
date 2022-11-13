const isObject = (o: any): boolean => typeof o === 'object' && !Array.isArray(o);

const mergeValues = (a: any, b: any): any => {
    if (isObject(a) && isObject(b)) return deepMerge(a, b);

    if (Array.isArray(a) && Array.isArray(b)) return [ ...a, ...b ];
    if (Array.isArray(a) && !Array.isArray(b)) return [ ...a, b ];
    if (!Array.isArray(a) && Array.isArray(b)) return [ a, ...b ];

    return b === undefined ? a : b;
}

export default function deepMerge(source: object, target: object): object {
    const result = {};

    const oKeys = new Set();
    Object.keys(source).forEach((key) => oKeys.add(key));
    Object.keys(target).forEach((key) => oKeys.add(key));

    oKeys.forEach((key: string) => result[key] = mergeValues(source[key], target[key]));

    return result;
}