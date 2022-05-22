let products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 32000, title: "Check Shirt" },
  { id: 2, price: 15000, title: "Black Tie" },
  { id: 3, price: 67000, title: "Springfield Shirt" },
  { id: 4, price: 82000, title: "Red Mini Dress" },
];

let result = products.map((x) => x.title).sort();

console.log(result);
