import { sleep } from "../Helper/helper";

export const QuickSort = async (array, l, u, setArray) => {
  if (u > l) {
    const p = await Partition(array, l, u, setArray);
    QuickSort(array, l, p - 1, setArray);
    QuickSort(array, p + 1, u, setArray);
  }
};

const Partition = async (array, l, u, setArray) => {
  let p = l;
  let start = l,
    end = u;
  while (start < end) {
    while (array[start] <= array[p]) {
      start++;
    }
    while (array[end] > array[p]) {
      end--;
    }
    if (start < end) {
      [array[end], array[start]] = [array[start], array[end]];
    }
  }
  [array[end], array[l]] = [array[l], array[end]];
  await sleep(500);
  setArray([...array]);
  return end;
};
