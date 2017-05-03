import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
} from '../actions';

class ProductDetail extends Component {
  handleAddToCartClick() {
    const { singleProduct } = this.props;
    const productToBeAdded = singleProduct;
    productToBeAdded.available = false;
    this.props.addItemToCart(productToBeAdded);
  }

  handleRemoveFromCartClick() {
    const { singleProduct } = this.props;
    const cartItemToBeRemoved = singleProduct;
    cartItemToBeRemoved.available = true;
    this.props.removeItemFromCart(cartItemToBeRemoved);
  }

  render() {
    const { singleProduct } = this.props;
    if (!singleProduct) { return <div>loading...</div>; }
    return (
      <div className="list-group-item">
        <img
          src={singleProduct.image}
          alt={singleProduct.name}
          width="100%"
          height="auto"
        />
        <p>{ singleProduct.name }</p>
        <p>${ singleProduct.price }</p>
        <p>{ singleProduct.description }</p>
        <p>{ singleProduct.available ? 'Available' : 'Not Available'}</p>
        <button
          className="btn btn-primary btn-block"
          disabled={!singleProduct.available}
          onClick={this.handleAddToCartClick.bind(this)}
        >
         Add to Cart
        </button>
        <button
          className="btn btn-primary btn-block"
          disabled={singleProduct.available || singleProduct.checkedOut}
          onClick={this.handleRemoveFromCartClick.bind(this)}
        >
          {singleProduct.checkedOut ? 'Item Checked Out' : 'Remove from Cart'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { singleProduct } = state;
  return { singleProduct };
};

export default connect(
  mapStateToProps,
  { addItemToCart,
    removeItemFromCart,
  })(ProductDetail);
