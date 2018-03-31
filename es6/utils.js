const updateCurrencyPairsMidPrices = (data, global) => {
  var d = new Date();
  var time = d.getTime();
  var newObj = {};
  newObj.time = time;
  newObj.midPrice = (data.bestBid + data.bestAsk) / 2;

  if (global.allCurrencyPairsMidPrices[data.name]) {
    global.allCurrencyPairsMidPrices[data.name].push(newObj);

    var filterArr = global.allCurrencyPairsMidPrices[data.name].filter((dataObj) => {
      return ((time/1000 - dataObj.time/1000) < 30);
    });

    global.allCurrencyPairsMidPrices[data.name] = filterArr;

  } else {
    global.allCurrencyPairsMidPrices[data.name] = [newObj];
  }
};

module.exports = updateCurrencyPairsMidPrices;
