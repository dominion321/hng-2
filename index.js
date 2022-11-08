const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});
app.post("/calc", (req, res) => {
  let a = parseInt(req.body.x);
  let b = parseInt(req.body.y);
  let operation =  req.body.operation_type;
   
  switch (operation) {
    case "addition":
      result = a + b;
      console.log(result, "ooo");
      break;
    case "subtraction":
      result = a - b;
      break;
    case "multiplication":
      result = a * b;
      break;
    case "division":
      result = a / b;
      break;
  }
  res.send({
    "slackUsername": "Dom",
    "result": result,
    "operation_type": operation
  });
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
