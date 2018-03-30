class TableView {
  constructor(props) {
    this.$ = props.id;
    this.data = props.data;
    this.render();
  }
  render() {
    console.log('this.data ', this.data)
  }
}

module.exports = TableView;