const factorial = (n) => {
    let res = 1;

    while (n !== 1) {
        res *= n;
        n--
    }

    return res;
}

const cacheFn = (fn) => {
    const cache = {};

    return function (n) {
        if (cache[n]) {
            console.log('from cache');
            return cache[n]
        };

        const factorialRes = fn(n);

        cache[n] = factorialRes;
        console.log('not from cache');
        return factorialRes;
    }
}

const cache = cacheFn(factorial);

console.log(cache(5));
console.log(cache(5));
console.log(cache(2));

console.log(cache(4));
console.log(cache(2));

