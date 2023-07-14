var ShopComponent = React.createClass({
  displayName: 'ShopComponent',

  propTypes: {
    productsItems: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        src: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        quantity: React.PropTypes.number.isRequired,
      })
    ),
  },

  getInitialState: function () {
    return {
      newProductsList: this.props.productsItems,
      selectedProductId: null,
    };
  },

  deleteProduct: function (id) {
    if (window.confirm('Are you sure you want to delete this product')) {
      var newList = this.state.newProductsList.filter((item) => item.id !== id);
      this.setState({ newProductsList: newList });
    }
  },

  selectedProductId: function (id) {
    this.setState({ selectedProductId: id });
  },

  render: function () {
    return React.DOM.div(
      { className: 'ShopComponent' },
      this.state.newProductsList.map((item) => {
        return React.createElement(ProductComponent, {
          key: item.id,
          id: item.id,
          title: item.title,
          src: item.src,
          price: item.price,
          quantity: item.quantity,
          cbDeleteProduct: this.deleteProduct,
          selectedProductId: this.state.selectedProductId,
          cbSelectedProductId: this.selectedProductId,
        });
      })
    );
  },
});
