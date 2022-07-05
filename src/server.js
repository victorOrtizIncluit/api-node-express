const express = require("express");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

//***ROUTER***//
const indexRouter = require('./routes/index');

app.use(parser.urlencoded({ extended: false }));

app.use(parser.json());

//***ROUTES***//
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
