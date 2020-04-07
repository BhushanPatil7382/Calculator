const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
  response.sendFile(__dirname +"/index.html");
});

app.post("/", function(request, response){

  var num1 = Number(request.body.num1);
  var num2 = Number(request.body.num2);

  var result = num1 + num2;

  response.send("The result is " +result);
});

app.get("/BMI", function(request, response){
  response.sendFile(__dirname + "/BMI.html");
});

app.post("/BMI", function(request, response){

  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);

  var bmi = weight / (height * height);

  response.send("The result is " +bmi);
});

app.listen(3001, function(){
  console.log("Server Connected to 3000");
});
