export class Product {
  #id;
  #name;
  #price;
  #tax;

  constructor(id, name, price, tax) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#tax = tax;
  }

  getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  getPrice() {
    return this.#price;
  }

  getTax() {
    return this.#tax;
  }
}
