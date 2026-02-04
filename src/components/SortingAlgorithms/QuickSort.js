import { sleep } from "../Helper/helper";

export const QuickSort = async (array, l, u, setArray) => {
  if (u > l) {
    const p = await Partition(array, l, u, setArray);
    await QuickSort(array, l, p - 1, setArray);
    await QuickSort(array, p + 1, u, setArray);
  } else if (u === l && u >= 0) {
    array[u].color = "green";
    await sleep(50);
    setArray([...array]);
  }
};

const Partition = async (array, l, u, setArray) => {
  let p = l;
  let start = l,
    end = u;
  while (start < end) {
    while (array[start].value <= array[p].value) {
      start++;
    }
    while (array[end].value > array[p].value) {
      end--;
    }
    if (start < end) {
      [array[end], array[start]] = [array[start], array[end]];
    }
  }
  [array[end], array[l]] = [array[l], array[end]];
  array[end].color = "green";
  await sleep(500);
  setArray([...array]);
  return end;
};
