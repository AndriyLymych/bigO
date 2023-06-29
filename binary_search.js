const arr = [];
let count = 0;

for (let i = 1; i <= 100; i++) {
    arr.push(i);
}

const binarySearch = (arr, searchEl) => {
    let startIdx = 0;
    let endIdx = arr.length - 1;
    let middleIdx;
    let searchElIdx;

    while (startIdx <= endIdx) {
        count += 1
        middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (searchEl === arr[middleIdx]) {
            searchElIdx = middleIdx;

            return searchElIdx
        }

        if (searchEl < arr[middleIdx]) {
            endIdx = middleIdx - 1
        }

        if (searchEl > arr[middleIdx]) {
            startIdx = middleIdx + 1
        }

    }

    return searchElIdx
}
const startTimeBinary = performance.now()

console.log(binarySearch(arr, 99));
console.log('count: ', count);


const endTimeBinary = performance.now()

console.log(`Call to binaryTree took ${endTimeBinary - startTimeBinary} milliseconds`)

