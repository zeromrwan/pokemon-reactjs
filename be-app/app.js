const express = require('express')
require('dotenv').config();
require('./config/database')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes');
const cors = require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/api-be', routes);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})