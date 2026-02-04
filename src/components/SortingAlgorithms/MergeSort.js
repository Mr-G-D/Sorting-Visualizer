import { sleep } from "../Helper/helper";

/**
 * Main MergeSort function
 * @param {number[]} array - The array to be sorted
 * @param {function} setArray - State setter to update the array in the UI
 */
export const MergeSort = async (array, setArray) => {
  await mergeSortHelper(array, 0, array.length - 1, setArray);
};

/**
 * Recursive helper function that divides the array into smaller subarrays
 * @param {number[]} array - The array being sorted
 * @param {number} left - Left index of the current subarray
 * @param {number} right - Right index of the current subarray
 * @param {function} setArray - State setter to update the array in the UI
 */
const mergeSortHelper = async (array, left, right, setArray) => {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    // Recursively sort left half
    await mergeSortHelper(array, left, mid, setArray);
    // Recursively sort right half
    await mergeSortHelper(array, mid + 1, right, setArray);
    // Merge the sorted halves
    await merge(array, left, mid, right, setArray);
  }
};

/**
 * Merges two sorted subarrays into one sorted array
 * @param {number[]} array - The array containing the subarrays to merge
 * @param {number} left - Start index of left subarray
 * @param {number} mid - End index of left subarray
 * @param {number} right - End index of right subarray
 * @param {function} setArray - State setter to update the array in the UI
 */
const merge = async (array, left, mid, right, setArray) => {
  // Create copies of the left and right subarrays
  const leftArr = array.slice(left, mid + 1);
  const rightArr = array.slice(mid + 1, right + 1);

  let i = 0, // Pointer for left subarray
    j = 0, // Pointer for right subarray
    k = left; // Pointer for merged array

  // Compare elements from left and right subarrays and merge them in sorted order
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      array[k] = leftArr[i];
      i++;
    } else {
      array[k] = rightArr[j];
      j++;
    }
    k++;
    await sleep(500);
    setArray([...array]);
  }

  // Add remaining elements from left subarray
  while (i < leftArr.length) {
    array[k] = leftArr[i];
    i++;
    k++;
    await sleep(500);
    setArray([...array]);
  }

  // Add remaining elements from right subarray
  while (j < rightArr.length) {
    array[k] = rightArr[j];
    j++;
    k++;
    await sleep(500);
    setArray([...array]);
  }
};
