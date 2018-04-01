const tableRow = require('./TableView');

describe('TableView', () => {
  it('Call The Constructor and create table', () => {
    const div = document.createElement("div");
    const TableView = new tableRow({
      node: div,
      data: [
        {
          "name": "gbpaud",
          "bestBid": 1.8899720617188756,
          "bestAsk": 1.9550019816411313,
          "openBid": 1.8885006037024021,
          "openAsk": 1.932899396297598,
          "lastChangeAsk": 0.06332772101079831,
          "lastChangeBid": 0.08900450895206324
        },
      ]
    });

    expect(div.innerHTML).toMatchSnapshot();
  });
});
