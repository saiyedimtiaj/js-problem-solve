const items = [
  { quantity: 2, price: 10 },
  { quantity: 1, price: 15 },
  { quantity: 3, price: 7 },
];

const calculateTotal = (item) => {
  return item.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

const result = calculateTotal(items);
console.log(result);
