import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  fetchCartItems,
  checkOutItems,
} from '../actions';
import CartListItem from './cartListItem';

class CartList extends Component {
  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleCheckOutClick() {
    const { cartItems } = this.props;
    this.props.checkOutItems(cartItems);
  }

  renderCartList() {
    const { cartItems } = this.props;
    if (cartItems.length < 1) {
      return (
        <div>
          <p>Your Cart is Empty</p>
          <Link to={`products/`}>
            <button
              className="btn btn-primary btn-block"
            >
              Back to Products Page
            </button>
          </Link>
        </div>
      );
    }

    return cartItems.map((cartItem) => {
      return (
        <CartListItem cartItem={cartItem} key={cartItem.id} />
      );
    });
  }

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <ul className="col-sm-12 list-group">
          {this.renderCartList()}
        </ul>
        <div className="col-sm-12 list-group">
          <div className="list-group-items">
            <button
              className="btn btn-primary btn-block"
              disabled={cartItems.length < 1}
              onClick={this.handleCheckOutClick.bind(this)}
            >
              Check Out!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return { cartItems };
};

export default connect(
  mapStateToProps,
  { fetchCartItems,
    checkOutItems })(CartList);
