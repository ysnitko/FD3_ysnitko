var ProductsComponent = React.createClass({
  displayName: 'ProductsComponent',

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

  render: function () {
    return React.DOM.div(
      { className: 'ProductsComponent' },
      React.createElement(TitleShopComponent, { title: shopTitle }),
      React.DOM.div(
        { className: 'Products' },
        this.props.productsItems.map((item) => {
          return React.DOM.div(
            { key: item.id, className: 'Product' },
            React.DOM.img({
              className: 'Img',
              src: `${item.src}`,
              alt: `${item.title}`,
            }),
            React.DOM.a({ className: 'Title', href: '#' }, item.title),
            React.DOM.span(
              { className: 'Price' },
              (text = 'price: '),
              item.price,
              (text = ' $')
            ),
            React.DOM.div(
              { className: 'Quantity' },
              (text = 'in stock: '),
              item.quantity
            )
          );
        })
      )
    );
  },
});
