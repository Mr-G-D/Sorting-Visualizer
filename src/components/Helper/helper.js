export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const HEAP_COLORS = {
  default: "dodgerblue",
  root: "#ff9800",
  parent: "#e53935",
  leftChild: "#ab47bc",
  rightChild: "#5c6bc0",
  swapping: "#fdd835",
  sorted: "#43a047",
  heapEnd: "#26c6da",
};

export const HEAP_LEGEND = [
  { color: HEAP_COLORS.root, label: "Root (max of heap)" },
  { color: HEAP_COLORS.parent, label: "Parent being compared" },
  { color: HEAP_COLORS.leftChild, label: "Left child (2i + 1)" },
  { color: HEAP_COLORS.rightChild, label: "Right child (2i + 2)" },
  { color: HEAP_COLORS.swapping, label: "Swap in progress" },
  { color: HEAP_COLORS.sorted, label: "Sorted region" },
  { color: HEAP_COLORS.heapEnd, label: "End of active heap" },
  { color: HEAP_COLORS.default, label: "Other heap elements" },
];

/**
 * Builds per-bar colors for heap sort visualization.
 */
export const getHeapBarColors = (
  length,
  { phase, heapSize, parent = null, leftChild = null, rightChild = null, swapping = [], showHeapEnd = false }
) => {
  const colors = new Array(length).fill(HEAP_COLORS.default);
  const highlighted = new Set(
    [parent, leftChild, rightChild, ...swapping].filter((index) => index != null && index >= 0)
  );

  if (phase === "extract") {
    for (let i = heapSize + 1; i < length; i++) {
      colors[i] = HEAP_COLORS.sorted;
    }
    if (showHeapEnd && heapSize > 0) {
      colors[heapSize - 1] = HEAP_COLORS.heapEnd;
    }
  }

  if (heapSize > 0 && !highlighted.has(0)) {
    colors[0] = HEAP_COLORS.root;
  }

  if (parent != null && parent >= 0) {
    colors[parent] = HEAP_COLORS.parent;
  }
  if (leftChild != null && leftChild >= 0) {
    colors[leftChild] = HEAP_COLORS.leftChild;
  }
  if (rightChild != null && rightChild >= 0) {
    colors[rightChild] = HEAP_COLORS.rightChild;
  }

  swapping.forEach((index) => {
    if (index >= 0 && index < length) {
      colors[index] = HEAP_COLORS.swapping;
    }
  });

  return colors;
};

export const highlight = (a, b) => {
  document.getElementById(a).style.backgroundColor = "red";
  document.getElementById(b).style.backgroundColor = "red";
};

export const dehighlight = (a, b) => {
  document.getElementById(a).style.backgroundColor = "dodgerBlue";
  document.getElementById(b).style.backgroundColor = "dodgerBlue";
};

export const generateArray = (len, setArray) => {
  let array = [];
  const min = 100,
    max = 600;
  for (let index = 0; index < len; index++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
  }
  setArray([...array]);
};
