const utils = require('./utils');

describe('updateCurrencyPairsMidPrices', () => {
  it('calls first time', () => {
    const data = {
      "bestBid": 2,
      "bestAsk": 4,
      "name": "usdjpy",
    };
    const allCurrencyPairsMidPrices = {};
    const time = 132345321;

    utils.updateCurrencyPairsMidPrices(data, allCurrencyPairsMidPrices, time);

    expect(allCurrencyPairsMidPrices).toMatchSnapshot();
  });

  it('update the array of same company', () => {
    const data = {
      "bestBid": 10,
      "bestAsk": 8,
      "name": "usdjpy",
    };
    const allCurrencyPairsMidPrices = {
      "usdjpy": [
        {
          "midPrice": 3,
          "time": 1522516237111,
        },
      ]
    };
    const time = 1522516227135;

    utils.updateCurrencyPairsMidPrices(data, allCurrencyPairsMidPrices, time);

    expect(allCurrencyPairsMidPrices).toMatchSnapshot();
  });

  it('filter the array for last 30 seconds', () => {
    const data = {
      "bestBid": 10,
      "bestAsk": 8,
      "name": "usdjpy",
    };
    const allCurrencyPairsMidPrices = {
      "usdjpy": [
        {
          "midPrice": 3,
          "time": 1522516237111,
        },
        {
          "midPrice": 2,
          "time": 1522516227135,
        },
      ]
    };
    const time = 1522516452157;

    utils.updateCurrencyPairsMidPrices(data, allCurrencyPairsMidPrices, time);

    expect(allCurrencyPairsMidPrices).toMatchSnapshot();
  });
});

describe('getSortedArray', () => {
  it('should generate array and return sorted array by lastChangeBid', () => {
    const data = {
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
    };

    expect(utils.getSortedArray(data)).toMatchSnapshot();
  });
});
