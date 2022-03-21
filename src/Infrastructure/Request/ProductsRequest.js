import request from '../../mock/requests/productsRequest';

export class ProductsRequest {

  #productsRepository;
  #productsFactory;

  constructor(
    productRepository,
    productFactory
  ) {
    this.#productsRepository = productRepository
    this.#productsFactory = productFactory;
  }

  async fetch(url) {
    return request(url).then((data) => {
      this.#productsRepository.setProducts(
        this.#productsFactory.createCollection(data)
      )
    })
  }
}
