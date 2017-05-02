const Cart = require('../models/Cart');

module.exports = {
  getCartItems(req, res, next) {
    Cart.find({})
      .then(cartItems => res.send(cartItems))
      .catch(next);
  },
  addItem(req, res, next) {
    const newItemProps = req.body;
    Cart.create(newItemProps)
      .then(newItem => res.send(newItem))
      .catch(next);
  },
  deleteItem(req, res, next) {
    const itemId = req.params.id;
    Cart.findByIdAndRemove({ _id: itemId })
      .then((deletedItem) => {
        res.status(204).send(deletedItem);
      })
      .catch(next);
  },
  checkOutItems(req, res, next) {
    Cart.remove({})
      .then((deletedItems) => {
        res.status(204).send(deletedItems);
      })
      .catch(next);
  },
};
