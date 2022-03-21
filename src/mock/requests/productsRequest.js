import { products } from '../data/products';

export default function request(url) {
  return new Promise((resolve, reject) => {
    products && products.length
      ? resolve(products)
      : reject({
        message: 'Empty product list.',
      });
  });
}
