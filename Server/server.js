var express = require('express'),
  path = require('path');

var CoinMarketCap = require('node-coinmarketcap-rest-api');


var coinmarketcap = new CoinMarketCap();

var app = express();

//CORS middleware
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
}

app.configure(function () {
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(allowCrossDomain);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.use(express.static(path.join(__dirname, 'public')));
});

/**
 * Root
 */
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('Coinmarketcap API is running...');
});

app.get('/cryptocurrencies/latest', function (req, res) {
  let limit = req.query.count || 100
  coinmarketcap.getAllTickers(coins => {
    res.send(coins.getTop(limit))
  })
});

app.get('/cryptocurrencies/:symbol', function (req, res) {
  coinmarketcap.getAllTickers(coins => {
    res.send(coins.get(req.route.params.symbol))
  })

})




app.listen(8080);
