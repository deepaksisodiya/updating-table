const updateCurrencyPairsMidPrices = (data, allCurrencyPairsMidPrices, currentTime) => {
  const newObj = {};
  newObj.time = currentTime;
  newObj.midPrice = (data.bestBid + data.bestAsk) / 2;

  const companyName = data.name;

  if (allCurrencyPairsMidPrices[companyName]) {
    // pushing the new obj to array
    allCurrencyPairsMidPrices[companyName].push(newObj);

    // filtering for last 30 seconds
    const filterArr = allCurrencyPairsMidPrices[companyName].filter((dataObj) => ((currentTime/1000 - dataObj.time/1000) < 30));

    // assigning filtered array
    allCurrencyPairsMidPrices[companyName] = filterArr;

  } else {
    allCurrencyPairsMidPrices[companyName] = [newObj];
  }
};

module.exports = {
  updateCurrencyPairsMidPrices,
};
