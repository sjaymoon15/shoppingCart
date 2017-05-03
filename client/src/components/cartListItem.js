import React, { Component } from 'react';

class CartListItem extends Component {
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
        >
          Remove From Cart
        </button>
      </li>
    );
  }
}

export default CartListItem;
