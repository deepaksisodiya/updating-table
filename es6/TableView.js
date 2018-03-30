class TableView {
  constructor(props) {
    this.$ = document.getElementById(props.id);
    this.data = props.data;
    this.render();
  }

  renderRow(row) {
    const tr = `<tr>
        <td>${row.name}</td>
        <td>${row.bestBid}</td> 
        <td>${row.bestAsk}</td> 
        <td>${row.openBid}</td> 
        <td>${row.openAsk}</td> 
        <td>${row.lastChangeAsk}</td> 
        <td>${row.lastChangeBid}</td>
      </tr>`;
    return tr;
  }

  render() {
    const priceUpdatesArr = Object.values(this.data);

    const table = `<table>
      <tr>
        <th>Name</th>
        <th>bestBid</th> 
        <th>bestAsk</th>
        <th>openBid</th>
        <th>openAsk</th>
        <th>lastChangeAsk</th>
        <th>lastChangeBid</th>
      </tr>
      ${priceUpdatesArr.map((row) => this.renderRow(row)).join('')}
    </table>`;

    this.$.innerHTML = table;
  }
}

module.exports = TableView;