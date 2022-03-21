import { Order } from '../../Entity/Order';
import { Product } from '../../Entity/Product';
import { User } from '../../Entity/User';

export class OrderFactory {

  #userFactory;
  #productFactory;

  constructor(
    userFactory,
    productFactory
  ) {
    this.#userFactory = userFactory;
    this.#productFactory = productFactory;
  }

  createEntity(data) {
    const { user, product } = data || {};
    const userEntity = user instanceof User ? user : this.#userFactory.createEntity(user);
    const productEntity = product instanceof Product ? product : this.#productFactory.createEntity(product);

    return new Order(userEntity, productEntity)
  }
}
