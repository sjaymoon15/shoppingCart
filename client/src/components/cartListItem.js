import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  removeItemFromCart,
} from '../actions';

class CartListItem extends Component {

  handleRemoveFromCartClick() {
    const { cartItem } = this.props;
    const cartItemToBeRemoved = cartItem;
    cartItemToBeRemoved.available = true;
    this.props.removeItemFromCart(cartItemToBeRemoved);
  }

  render() {
    const { cartItem } = this.props;
    return (
      <li className="list-group-item">
        <img
          src={cartItem.image}
          alt={cartItem.name}
          width="100%"
          height="auto"
        />
        <p>{ cartItem.name }</p>
        <p>${ cartItem.price }</p>
        <button
          className="btn btn-primary btn-block"
          onClick={this.handleRemoveFromCartClick.bind(this)}
        >
          Remove From Cart
        </button>
      </li>
    );
  }
}

export default connect(null, { removeItemFromCart })(CartListItem);
