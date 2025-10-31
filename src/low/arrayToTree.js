// 5.	对于如下数据，pid 表示 父节点的值，如果没有 pid 则表示该对象对象为根节点，请将其格式化为树形数据结构，要求可以达到无限深度。

// const origin = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 11, pid: 1 },
//   { id: 12, pid: 1 },
//   { id: 111, pid: 11 },
//   { id: 112, pid: 11 },
//   { id: 21, pid: 2 },
//   { id: 31, pid: 3 }
// ];


function tree(arr, ori) {
  if (arr.length === 0) arr = ori.filter(v => !("pid" in v));

  arr.forEach(v => {
    let childs = ori.filter(item => item.pid === v.id);

    if (childs.length > 0) {
      v.children = tree(childs, ori);
    }
  });

  return arr;
}

console.log(tree([], origin));