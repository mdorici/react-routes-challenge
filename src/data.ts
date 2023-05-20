const products = [
  {
    name: "Computadores",
    item1: "Computador 1",
    item2: "Computador 2",
    item3: "Computador 3",
  },
  {
    name: "Eletrônicos",
    item1: "Eletrônico 1",
    item2: "Eletrônico 2",
    item3: "Eletrônico 3",
  },
  {
    name: "Livros",
    item1: "Livro 1",
    item2: "Livro 2",
    item3: "Livro 3",
  },
];

export function getProducts() {
  return products;
}

export function getProduct(name: string) {
  return products.find((product) => product.name === name);
}
