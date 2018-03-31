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
});
