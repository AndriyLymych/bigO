let count = 0;

const arr = [1, 24, 11, -2, 3, -2, 66, 23, 54, 1, 6, 12, 5, -8, 2, 24, 2, 43, 1, 23, 4, 23, 6, 23, 11, -2, 2, -6];

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp
            }
            count += 1
        }

    }

    return arr
}

console.log(bubbleSort(arr));
console.log('count: ', count);
