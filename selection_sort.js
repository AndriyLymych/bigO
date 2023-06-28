let count = 0;
const arr = [1, 24, 11, -2, 3, -2, 66, 23, 54, 1, 6, 12, 5, -8, 2, 24, 2, 43, 1, 23, 4, 23, 6, 23, 11, -2, 2, -6];

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
            count += 1;

        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr
}

console.log(selectionSort(arr));
console.log('count: ', count);

