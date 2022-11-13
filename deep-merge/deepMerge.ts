type DeepValue = string | number | DeepObject | Array<DeepValue>;

interface DeepObject {
    [key: string]: DeepValue;
}

const isObject = (o: DeepValue): o is DeepObject => typeof o === 'object' && !Array.isArray(o);

const mergeValues = (a: DeepValue, b: DeepValue): DeepValue => {
    if (isObject(a) && isObject(b)) return deepMerge(a, b);

    if (Array.isArray(a) && Array.isArray(b)) return [ ...a, ...b ];
    if (Array.isArray(a) && !Array.isArray(b)) return [ ...a, b ];
    if (!Array.isArray(a) && Array.isArray(b)) return [ a, ...b ];

    return b === undefined ? a : b;
}

export default function deepMerge(source: DeepObject, target: DeepObject): DeepObject {
    const result = {};

    const oKeys: Set<string> = new Set();
    Object.keys(source).forEach((key) => oKeys.add(key));
    Object.keys(target).forEach((key) => oKeys.add(key));

    oKeys.forEach((key: string) => result[key] = mergeValues(source[key], target[key]));

    return result;
}