const updateCurrencyPairsMidPrices = (data, allCurrencyPairsMidPrices, time) => {
  var newObj = {};
  newObj.time = time;
  newObj.midPrice = (data.bestBid + data.bestAsk) / 2;

  if (allCurrencyPairsMidPrices[data.name]) {
    allCurrencyPairsMidPrices[data.name].push(newObj);

    var filterArr = allCurrencyPairsMidPrices[data.name].filter((dataObj) => {
      return ((time/1000 - dataObj.time/1000) < 30);
    });

    allCurrencyPairsMidPrices[data.name] = filterArr;

  } else {
    allCurrencyPairsMidPrices[data.name] = [newObj];
  }
};

module.exports = updateCurrencyPairsMidPrices;
