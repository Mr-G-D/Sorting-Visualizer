import { sleep } from "../Helper/helper";

export async function ShellSort(array, setArray) {
  const arr = [...array];
  const n = arr.length;

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let j = i;

      // Move the element back one gap at a time so each step is rendered
      while (j >= gap && arr[j - gap] > arr[j]) {
        [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
        j -= gap;

        await sleep(500);
        setArray([...arr]);
      }
    }
  }
}
