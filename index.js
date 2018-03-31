/**
 * This javascript file will constitute the entry point of your solution.
 *
 * Edit it as you need.  It currently contains things that you might find helpful to get started.
 */

// This is not really required, but means that changes to index.html will cause a reload.
require('./site/index.html')
// Apply the styles in style.css to the page.
require('./site/style.css')

// if you want to use es6, you can do something like
//     require('./es6/myEs6code')
// here to load the myEs6code.js file, and it will be automatically transpiled.

var TableView = require('./es6/TableView');
var updateCurrencyPairsMidPrices = require('./es6/utils');
// Change this to get detailed logging from the stomp library
global.DEBUG = false

const url = "ws://localhost:8011/stomp";
const client = Stomp.client(url);
client.debug = function(msg) {
  if (global.DEBUG) {
    console.info(msg)
  }
};

global.currencyPairs = {};
global.allCurrencyPairsMidPrices = {};

function connectCallback() {
  // document.getElementById('stomp-status').innerHTML = "It has now successfully connected to a stomp server serving price updates for some foreign exchange currency pairs."
  var subscription = client.subscribe("/fx/prices", dataCallback);
}

client.connect({}, connectCallback, function(error) {
  alert(error.headers.message)
});

function dataCallback(message) {
  // called when the client receives a STOMP message from the server
  if (message.body) {
    const data = JSON.parse(message.body);
    global.currencyPairs[data.name] = data;

    new TableView({
        node: document.getElementById('table'),
        data: global.currencyPairs,
    });

    updateCurrencyPairsMidPrices(data, global);

    // drawing sparkline
    for (var name in global.allCurrencyPairsMidPrices) {
      const sparkline = new Sparkline(document.getElementById(name), { width: 200 });
      sparkline.draw(global.allCurrencyPairsMidPrices[name].map((dataObj) => dataObj.midPrice));
    }
  } else {
    console.log("got empty message");
  }
}

// const exampleSparkline = document.getElementById('example-sparkline');
// Sparkline.draw(exampleSparkline, [1, 2, 3, 6, 8, 20, 2, 2, 4, 2, 3]);





