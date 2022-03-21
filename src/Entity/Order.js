import generateOrderId from '../Helper/generateOrderId'

export class Order {

  #user;
  #product
  #id;

  constructor(user, product) {
    this.#user = user;
    this.#product = product;
    this.#id = generateOrderId(this.#user.getId(), this.#product.getId());
  }

  setId(id) {
    this.#id = id;
    return this;
  }

  getId() {
    return this.#id;
  }

  setUser(user) {
    this.#user = user;
    this.setId(generateOrderId(this.#product.getId(), this.#user.getId()));
    return this;
  }

  getUser() {
    return this.#user;
  }

  getProduct() {
    return this.#product;
  }

  getDiscountPrice() {
    if (this.#user.getDiscount()) {
      let discount = this.#product.getPrice() / 100 * this.#user.getDiscount();
      return this.#product.getPrice() - discount;
    }
    return this.#product.getPrice();
  }
}
