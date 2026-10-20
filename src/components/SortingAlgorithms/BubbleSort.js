import { sleep } from "../Helper/helper";

export async function BubbleSort(array, setArray) {
  const arr = [...array];
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        await sleep(500);
        setArray([...arr]);
      }
    }
  }
}
