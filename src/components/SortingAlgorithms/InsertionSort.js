import { sleep } from "../Helper/helper";

export async function InsertionSort(array, setArray) {
  let temp, j;
  for (let index = 0; index < array.length; index++) {
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      j = i - 1;
      while (j >= 0 && array[j].value > temp.value) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = temp;
      array[j + 1].color = "green";
      await sleep(500);
      setArray([...array]);
    }

    for (let k = 0; k <= index; k++) {
      array[k].color = "green";
    }
    await sleep(500);
    setArray([...array]);
  }
}
