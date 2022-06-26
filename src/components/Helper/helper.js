export const swap = async (a, b) => {
  let temp = a;
  a = b;
  b = temp;
};
export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const highlight = (a, b) => {
  document.getElementById(a).style.backgroundColor = "red";
  document.getElementById(b).style.backgroundColor = "red";
};

export const dehighlight = (a, b) => {
  document.getElementById(a).style.backgroundColor = "dodgerBlue";
  document.getElementById(b).style.backgroundColor = "dodgerBlue";
};

export const generateArray = (len) => {
  let array = [];
  const min = 100,
    max = 600;
  for (let index = 0; index < len; index++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
  }
  return array;
};
