var Filter = React.createClass({
  displayName: 'Filter',

  propTypes: {
    wordsArray: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      searchValue: '',
      checked: false,
      filteredArray: this.props.wordsArray,
    };
  },

  changeInputState: function (e) {
    this.setState({
      searchValue: e.target.value,
    });
  },

  filterArray: function () {
    var filteredArray = this.state.filteredArray.filter((word) =>
      word.includes(this.state.searchValue)
    );
    if (this.state.checked) {
      return filteredArray.sort();
    }
    return filteredArray;
  },

  toggleCheckbox: function () {
    this.setState((prevState) => ({
      checked: !prevState.checked,
    }));
    console.log(this.state.checked);
  },

  reset: function () {
    return this.setState({
      searchValue: '',
      checked: false,
      filteredArray: this.props.wordsArray,
    });
  },

  render: function () {
    var filtered = this.filterArray();
    return React.DOM.div(
      { className: 'Filter' },
      React.DOM.div(
        { className: 'Actions' },
        React.DOM.input({
          className: 'Checkbox',
          type: 'checkbox',
          checked: this.state.checked,
          onChange: this.toggleCheckbox,
        }),
        React.DOM.input({
          className: 'InputText',
          type: 'text',
          value: this.state.searchValue,
          onChange: this.changeInputState,
        }),
        React.DOM.button(
          {
            className: 'ResetButton',
            onClick: this.reset,
          },
          'reset'
        )
      ),
      React.DOM.ul(
        {
          className: 'ListItems',
        },
        filtered.map((item, index) => {
          return React.DOM.li({ key: index, className: 'Item' }, item);
        })
      )
    );
  },
});
