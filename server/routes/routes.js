const ProductController = require('../controllers/product_controller');
const CartController = require('../controllers/cart_controller');
const Authentication = require('../controllers/auth_controller');

module.exports = (app) => {
  app.post('/api/signup', Authentication.signup);
  app.get('/api/products', ProductController.fetchProducts);
  app.put('/api/products', ProductController.updateProduct);
  app.get('/api/cart', CartController.getCartItems);
  app.post('/api/cart', CartController.addItem);
  app.delete('/api/cart/:id', CartController.deleteItem);
  app.delete('/api/checkout', CartController.checkOutItems);
};
