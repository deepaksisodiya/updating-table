const updateCurrencyPairsMidPrices = require('./utils');


describe('updateCurrencyPairsMidPrices', () => {
  it('calls first time', () => {
    const data = {
      "bestBid": 2,
      "bestAsk": 4,
      "name": "usdjpy",
    };
    const allCurrencyPairsMidPrices = {};
    const time = 132345321;

    updateCurrencyPairsMidPrices(data, allCurrencyPairsMidPrices, time);

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

    updateCurrencyPairsMidPrices(data, allCurrencyPairsMidPrices, time);

    expect(allCurrencyPairsMidPrices).toMatchSnapshot();
  });
});
