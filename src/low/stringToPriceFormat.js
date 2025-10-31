// 1.	实现一个金额格式转换工具函数。

// 例如：52545455454 -> 52,545,455,454

// 要求：（1）可控制分割符号（2）可控制分割字符数。


function toPriceRight(str, gap, type) {
  return String(str)
    .split("")
    .reduce((init, v, i) => {
      if (i % gap == gap - 1) {
        init += type + v;
      } else {
        init += v;
      }
      return init;
    }, "");
}

console.log(toPriceRight("52545455454", 3, ",")); // 52,545,455,454
