import { sleep } from "../Helper/helper";

export async function HeapSort(array, setArray) {
  let n = array.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, setArray);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    array[i].color = "green";
    await sleep(500);
    setArray([...array]);

    await heapify(array, i, 0, setArray);
  }

  array[0].color = "green";
  await sleep(500);
  setArray([...array]);
}

async function heapify(array, n, i, setArray) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left = 2*i + 1
  let r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && array[l].value > array[largest].value) largest = l;

  // If right child is larger than largest so far
  if (r < n && array[r].value > array[largest].value) largest = r;

  // If largest is not root
  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];
    await sleep(500);
    setArray([...array]);

    // Recursively heapify the affected sub-tree
    await heapify(array, n, largest, setArray);
  }
}