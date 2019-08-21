const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const productController = require("./controllers/product");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

app.use("/products", productController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
