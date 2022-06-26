import { sleep, swap } from "../Helper/helper";

export async function InsertionSort(array, setArray) {
  let temp, j;
  for (let index = 0; index < array.length; index++) {
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        await swap(array[j + 1], array[j]);
        setArray([...array]);
        j--;
        await sleep(1000);
      }
      array[j + 1] = temp;
    }
  }
}
