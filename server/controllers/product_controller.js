const faker = require('faker');
const Product = require('../models/Product');

const PRODUCT_COUNT = 10;
const products = [];
for (let i = 0; i < PRODUCT_COUNT; i++) {
  products.push({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    description: faker.lorem.sentence(),
    available: true,
    checkedOut: false,
  });
}

module.exports = {
  fetchProducts(req, res, next) {
    Product.find({})
      .then((foundProducts) => {
        if (foundProducts.length < 1) {
          Product.insertMany(products)
            .then((createdProducts) => {
              res.send(createdProducts);
            });
        } else {
          res.send(foundProducts);
        }
      })
      .catch(next);
  },
  updateProduct(req, res, next) {
    const productId = req.body._id;
    const productProps = req.body;
    Product.findByIdAndUpdate({ _id: productId }, productProps)
      .then(updatedItem => res.send(updatedItem))
      .catch(next);
  },
};
