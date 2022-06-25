let temp, j;
export async function InsertionSort(array, setArray) {
  for (let index = 0; index < array.length; index++) {
    for (let i = 1; i < array.length; i++) {
      temp = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        swap(array, j + 1, j, setArray());
        j--;
      }
      array[j + 1] = temp;
    }
  }
  setArray([...array]);

  //   for (let i = 0; i < 5; i++) {
  //     yield i;
  //   }
}

export const swap = (array, a, b, setArray) => {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
  //   setArray([...array]);
};
