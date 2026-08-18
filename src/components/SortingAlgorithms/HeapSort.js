import { getHeapBarColors, HEAP_COLORS, sleep } from "../Helper/helper";

const showHeapState = async (visuals, length, heapSize, phase, options = {}) => {
  const { setBarColors } = visuals;
  if (!setBarColors) return;

  setBarColors(getHeapBarColors(length, { phase, heapSize, ...options }));
  await sleep(options.delay ?? 400);
};

/**
 * Restores the max-heap property for the subtree rooted at index i.
 */
const heapify = async (array, heapSize, i, setArray, phase, visuals) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  await showHeapState(visuals, array.length, heapSize, phase, {
    parent: i,
    leftChild: left < heapSize ? left : null,
    rightChild: right < heapSize ? right : null,
    showHeapEnd: phase === "extract",
    delay: 350,
  });

  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    await showHeapState(visuals, array.length, heapSize, phase, {
      swapping: [i, largest],
      showHeapEnd: phase === "extract",
      delay: 350,
    });

    [array[i], array[largest]] = [array[largest], array[i]];
    await sleep(500);
    setArray([...array]);
    await heapify(array, heapSize, largest, setArray, phase, visuals);
  }
};

/**
 * Transforms an unsorted array into a max-heap in-place.
 */
const buildMaxHeap = async (array, setArray, visuals) => {
  const n = array.length;

  await showHeapState(visuals, n, n, "build", { delay: 800 });

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, setArray, "build", visuals);
  }

  await showHeapState(visuals, n, n, "build", { delay: 800 });
};

/**
 * Extracts the maximum element from the heap repeatedly until the array is sorted.
 */
const extractMax = async (array, setArray, visuals) => {
  const n = array.length;

  await showHeapState(visuals, n, n - 1, "extract", {
    showHeapEnd: true,
    delay: 800,
  });

  for (let heapSize = n - 1; heapSize > 0; heapSize--) {
    await showHeapState(visuals, n, heapSize, "extract", {
      swapping: [0, heapSize],
      showHeapEnd: true,
      delay: 500,
    });

    [array[0], array[heapSize]] = [array[heapSize], array[0]];
    await sleep(500);
    setArray([...array]);

    await showHeapState(visuals, n, heapSize, "extract", {
      showHeapEnd: true,
      delay: 400,
    });

    await heapify(array, heapSize, 0, setArray, "extract", visuals);
  }

  if (visuals.setBarColors) {
    visuals.setBarColors(new Array(n).fill(HEAP_COLORS.sorted));
  }
};

/**
 * Sorts an array using the Heap Sort algorithm.
 *
 * @param {number[]} array - The array to be sorted
 * @param {function} setArray - State setter to update the array in the UI
 * @param {object} visuals - Optional { setBarColors } for heap visualization
 */
export const HeapSort = async (array, setArray, visuals = {}) => {
  await buildMaxHeap(array, setArray, visuals);
  await extractMax(array, setArray, visuals);
};
