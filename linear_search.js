const arr = [];
let count = 0;

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

const linearSearch = (arr, searchEl) => {
    for (let index = 0; index < arr.length; index++) {
        count += 1
        if (arr[index] === searchEl) {
            return index
        }
    }
}

const startTime = performance.now()

console.log(linearSearch(arr, 99));
console.log('count: ', count);


const endTime = performance.now()

console.log(`Call to indexOf took ${endTime - startTime} milliseconds`)