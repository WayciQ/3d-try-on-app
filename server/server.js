/*'use strict';*/


var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  autoIncrement = require('mongoose-auto-increment'),
  bodyParser = require('body-parser'), 
  cors = require('cors'),
  path = require('path');
  require('dotenv').config()
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));
app.use(express.static(__dirname + '/public'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
  console.log(`[DATABASE]: connected ${process.env.DB_CONNECTION}`)
});
autoIncrement.initialize(mongoose.connection);
autoIncrement.Promise = global.Promise;
app.use(cors({ origin: '*' })).use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cors())
var routes = require('./api/routes/index');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

module.exports = app;