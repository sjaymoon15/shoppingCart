import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../actions';

class ProductListItem extends Component {

  render() {
    const { product } = this.props;
    return (
      <li className="list-group-item">
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="auto"
        />
        <p>{ product.name }</p>
        <p>${ product.price }</p>
        <p>{ product.available ? 'Available' : 'Not Available'}</p>
        <button
          className="btn btn-primary btn-block"
          disabled={!product.available}
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

export default connect(null, { selectProduct })(ProductListItem);
