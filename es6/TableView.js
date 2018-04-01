class TableView {
  constructor(props) {
    this.$ = props.node;
    this.data = props.data;
    this.render();
  }

  renderRow(row) {
    const canvasId = row.name;

    const tr = `<tr>
        <td>${row.name}</td>
        <td>${row.bestBid}</td> 
        <td>${row.bestAsk}</td> 
        <td>${row.openBid}</td> 
        <td>${row.openAsk}</td> 
        <td>${row.lastChangeAsk}</td> 
        <td>${row.lastChangeBid}</td>
        <td><span id=${canvasId}></span></td>
      </tr>`;

    return tr;
  }

  render() {
    const table = `<table>
      <tr>
        <th>Name</th>
        <th>BestBid</th> 
        <th>BestAsk</th>
        <th>OpenBid</th>
        <th>OpenAsk</th>
        <th>LastChangeAsk</th>
        <th>LastChangeBid</th>
        <th>Midprice</th>
      </tr>
      ${this.data.map((row) => this.renderRow(row)).join('')}
    </table>`;

    this.$.innerHTML = table;
  }
}

module.exports = TableView;