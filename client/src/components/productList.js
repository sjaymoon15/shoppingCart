import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import ProductListItem from './productListItem';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProductList() {
    const { products } = this.props;
    return products.map((product) => {
      return (
        <ProductListItem product={product} key={product.id} />
      );
    });
  }

  render() {
    const { products } = this.props;
    if (!products) { return <div>Loading...</div>; }

    return (
      <ul className="col-sm-12 list-group">
        {this.renderProductList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps, { fetchProducts })(Products);
