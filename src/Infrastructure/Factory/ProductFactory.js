import { Product } from '../../Entity/Product';
import { checkIsNumber, checkIsString } from '../../Helper/typeGuards';

export class ProductFactory {
  constructor() {
  }

  createEntity(data) {
    const { id, name, price, tax } = data || {};

    return new Product(
      checkIsString(id) ? id : '',
      checkIsString(name) ? name : '',
      checkIsNumber(price) ? price : 0,
      checkIsNumber(tax) ? tax : 0,
    )
  }

  createCollection(data) {
    const arr = Array.isArray(data) ? data : []
    return arr.map(this.createEntity);
  }
}
