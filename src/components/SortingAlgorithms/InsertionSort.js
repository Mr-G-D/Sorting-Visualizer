import { sleep } from "../Helper/helper";

export async function InsertionSort(array, setArray) {
  let temp, j;
  for (let index = 0; index < array.length; index++) {
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
      await sleep(500);
      setArray([...array]);
    }
  }
}
