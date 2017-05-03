import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <div>Products component</div>
    );
  }
}

const mapStateToProps = (state) => {
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps, { fetchProducts })(Products);
