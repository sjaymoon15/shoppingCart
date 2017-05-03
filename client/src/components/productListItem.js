import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  selectProduct,
  addItemToCart,
 } from '../actions';

class ProductListItem extends Component {
  handleProductClick() {
    const { product } = this.props;
    this.props.selectProduct(product);
  }

  handleAddToCartClick() {
    const { product } = this.props;
    const productToBeAdded = product;
    productToBeAdded.available = false;
    this.props.addItemToCart(productToBeAdded);
  }

  render() {
    const { product } = this.props;
    return (
      <li className="list-group-item">
        <Link
          to={`products/${product.id}`}
          onClick={this.handleProductClick.bind(this)}
        >
          <img
            src={product.image}
            alt={product.name}
            width="100%"
            height="auto"
          />
          <p>{ product.name }</p>
          <p>${ product.price }</p>
          <p>{ product.available ? 'Available' : 'Not Available'}</p>
        </Link>
        <button
          className="btn btn-primary btn-block"
          disabled={!product.available}
          onClick={this.handleAddToCartClick.bind(this)}
        >
          Add to Cart
        </button>
        <button
          className="btn btn-primary btn-block"
          disabled={product.available || product.checkedOut}
        >
          {product.checkedOut ? 'Item Checked Out' : 'Remove from Cart'}
        </button>
      </li>
    );
  }
}

export default connect(
  null,
  { selectProduct,
    addItemToCart,
  })(ProductListItem);
