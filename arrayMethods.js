// forEach
function forEach(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

// map
function map(arr, cb) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i], i, arr));
    }
    return newArray;
}

// filter
function filter(arr, cb) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// reduce
function reduce(arr, cb, initialVal) {
    let prevVal = initialVal;
    for (let i = 0; i < arr.length; i++) {
        if (initialVal === undefined && i === 0) {
            prevVal = arr[i];
        } else {
            prevVal = cb(prevVal, arr[i], i, arr);
        }
    }
    return prevVal;
}

// some
function some(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) return true;
    }
    return false;
}

// every
function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i], i, arr)) return false;
    }
    return true;
}

// flat
function flat(arr, depth = 1) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) && depth > 0) {
            newArray.push(...flat(arr[i], depth - 1));
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// find
function find(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) return arr[i];
    }
}