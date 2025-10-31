
// 使用冒泡排序对数组中所有正整数排序（非正整数位置保持不变）
// 例如：[11, -1, 6, 5, -4, -7, 9, 8]

let arr = [11, -1, 6, 5, -4, -7, 9, 8];

function bubbleSort(arr) {
  let len = arr.length;
  let ori = arr.reduce((init, v, i) => {
    if (v < 0) {
      init.push({ value: v, index: i });
    }
    return init;
  }, []);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  let index = arr.findIndex(v => v >= 0),
    right = arr.slice(index);

  ori.forEach(v => {
    right.splice(v.index, 0, v.value);
  });

  return right;
}

console.log(bubbleSort(arr)); // [5, -1, 6, 8, -4, -7, 9, 11]