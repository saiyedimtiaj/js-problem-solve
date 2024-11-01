const square = (num) => {
  return num * num;
};

const double = (num) => {
  return num * 2;
};

const addFive = (num) => {
  return num + 5;
};

const compositFunction = (num) => {
  const squa = square(num);
  const doub = double(squa);
  const addFiv = addFive(doub);
  return addFiv;
};

const result = compositFunction(3);
console.log(result);
