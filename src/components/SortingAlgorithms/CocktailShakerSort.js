import { sleep } from "../Helper/helper";

export async function CocktailShakerSort(array, setArray) {
  let swapped = true;
  let start = 0;
  let end = array.length - 1;

  while (swapped) {
    swapped = false;

    for (let i = start; i < end; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;

        await sleep(500);
        setArray([...array]);
      }
    }

    if (!swapped) break;

    swapped = false;
    end--;

    for (let i = end; i > start; i--) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;

        await sleep(500);
        setArray([...array]);
      }
    }

    start++;
  }
}