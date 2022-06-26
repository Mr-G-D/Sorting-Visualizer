export const swap = async (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
