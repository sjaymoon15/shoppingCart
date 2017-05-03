import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductDetail extends Component {

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
        >
         Add to Cart
        </button>
        <button
          className="btn btn-primary btn-block"
          disabled={singleProduct.available || singleProduct.checkedOut}
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

export default connect(mapStateToProps)(ProductDetail);
