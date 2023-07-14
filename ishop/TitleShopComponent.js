var TitleShopComponent = React.createClass({
  displayName: 'TitleShopComponent',

  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function () {
    return React.DOM.a(
      { className: 'TitleShopComponent', href: '#' },
      this.props.title
    );
  },
});
