const people = [
  { name: "Alice", age: 28, gender: "female" },
  { name: "Bob", age: 35, gender: "male" },
  { name: "Catherine", age: 24, gender: "female" },
  { name: "David", age: 40, gender: "male" },
  { name: "Emily", age: 22, gender: "female" },
  { name: "Frank", age: 30, gender: "male" },
];

const filterFemales = (peoples) => {
  const result = peoples
    .filter((people) => people.gender == "female")
    .map((people) => people.name);
  return result;
};

const result = filterFemales(people);
console.log(result);
