const tableRow = require('./TableView');

describe('TableView', () => {
  it('Call The Constructor and create table', () => {
    const div = document.createElement("div");
    const TableView = new tableRow({
      node: div,
      data: {
        gbpaud: {
          "name": "gbpaud",
          "bestBid": 1.8899720617188756,
          "bestAsk": 1.9550019816411313,
          "openBid": 1.8885006037024021,
          "openAsk": 1.932899396297598,
          "lastChangeAsk": 0.06332772101079831,
          "lastChangeBid": 0.08900450895206324
        }
      }
    });

    expect(div.innerHTML).toMatchSnapshot();
  });

  it('Sorted the given data by lastChangeBid', () => {
    const div = document.createElement("div");
    const TableView = new tableRow({
      node: div,
      data: {
        usdjpy: {
          "name": "usdjpy",
          "bestBid": 106.7297012204255,
          "bestAsk": 107.25199883791178,
          "openBid": 107.22827132623534,
          "openAsk": 109.78172867376465,
          "lastChangeAsk": -4.862314256927661,
          "lastChangeBid": 2
        },
        usdeur: {
          "name": "usdeur",
          "bestBid": 106.7297012204255,
          "bestAsk": 107.25199883791178,
          "openBid": 107.22827132623534,
          "openAsk": 109.78172867376465,
          "lastChangeAsk": -4.862314256927661,
          "lastChangeBid": -10
        },
        name: {
          "name": "euraud",
          "bestBid": 106.7297012204255,
          "bestAsk": 107.25199883791178,
          "openBid": 107.22827132623534,
          "openAsk": 109.78172867376465,
          "lastChangeAsk": -4.862314256927661,
          "lastChangeBid": 1
        },
      }
    });

    expect(div.innerHTML).toMatchSnapshot();
  });
});
