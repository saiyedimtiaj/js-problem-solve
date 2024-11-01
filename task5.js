const arr = [1, 3, 5, 6, 3, 7, 8, 0, 5, 9, 0, 3, 2];

const getUniqueArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const result = getUniqueArray(arr);
console.log(result);
