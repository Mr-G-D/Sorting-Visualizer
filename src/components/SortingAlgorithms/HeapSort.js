import { sleep } from "../Helper/helper";

/**
 * Restores the max-heap property for the subtree rooted at index i.
 * Assumes the left and right subtrees are already valid max-heaps.
 *
 * @param {number[]} array - The array representing the heap
 * @param {number} heapSize - Number of elements currently in the heap
 * @param {number} i - Index of the root of the subtree to heapify
 * @param {function} setArray - State setter to update the array in the UI
 */
const heapify = async (array, heapSize, i, setArray) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    await sleep(500);
    setArray([...array]);
    await heapify(array, heapSize, largest, setArray);
  }
};

/**
 * Transforms an unsorted array into a max-heap in-place.
 *
 * @param {number[]} array - The array to build into a heap
 * @param {function} setArray - State setter to update the array in the UI
 */
const buildMaxHeap = async (array, setArray) => {
  const n = array.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, setArray);
  }
};

/**
 * Sorts an array using the Heap Sort algorithm.
 *
 * Phase 1 (build max-heap) is implemented below.
 * TODO: Phase 2 — repeatedly swap the root with the last heap element,
 *       shrink the heap, and call heapify on the root until the array is sorted.
 *
 * @param {number[]} array - The array to be sorted
 * @param {function} setArray - State setter to update the array in the UI
 */
export const HeapSort = async (array, setArray) => {
  await buildMaxHeap(array, setArray);

  // TODO: implement extraction loop (issue #2)
};
