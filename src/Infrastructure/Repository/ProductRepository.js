// Define our state and initialize it
let products;

// Define the functions that will expose that state
const ProductRepository = {
  setProducts: (newProducts) => { products = newProducts },
  getProducts: () => products
}

// Disallow new properties on our object
Object.freeze(ProductRepository);

export default ProductRepository;
