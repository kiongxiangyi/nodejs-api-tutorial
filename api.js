var Db = require("./dboperations");
var Bauteile = require("./bauteile");
const dboperations = require("./dboperations");

var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/Bauteile").get((request, response) => {
  dboperations.getBauteile().then((result) => {
    response.json(result);
  });
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("Order API is running at " + port);
