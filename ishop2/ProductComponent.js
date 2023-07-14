var ProductComponent = React.createClass({
  displayName: 'ProductComponent',

  propTypes: {
    cbSelectedProductId: React.PropTypes.func.isRequired,
    selectedProductId: React.PropTypes.number,
    cbDeleteProduct: React.PropTypes.func.isRequired,
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    quantity: React.PropTypes.number.isRequired,
  },

  render: function () {
    return React.DOM.div(
      {
        className: 'ProductComponent',
        style: {
          border:
            this.props.id === this.props.selectedProductId
              ? '1px solid #326fbb'
              : 'none',
        },
        onClick: function () {
          this.props.cbSelectedProductId(this.props.id);
        }.bind(this),
      },
      React.DOM.img({
        className: 'Img',
        src: this.props.src,
        alt: this.props.title,
      }),
      React.DOM.a({ className: 'Title', href: '#' }, this.props.title),
      React.DOM.span({ className: 'Price' }, 'price: ', this.props.price, '$'),
      React.DOM.div(
        { className: 'Quantity' },
        'in stock: ',
        this.props.quantity
      ),
      React.DOM.button(
        {
          className: 'Delete_item',
          onClick: function () {
            this.props.cbDeleteProduct(this.props.id);
          }.bind(this),
        },
        'Delete'
      )
    );
  },
});
