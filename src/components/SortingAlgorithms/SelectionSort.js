import { sleep } from "../Helper/helper";

export async function SelectionSort(array, setArray) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
      //   console.log(array);
    }
    await sleep(500);
    setArray([...array]);
  }
}
