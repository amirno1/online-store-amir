const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "here is all your products"
  });
});

router.get("/:id", (req, res) => {
  res.json({
    message: `The id you are looking for is ${req.params.id}`
  });
});

module.exports = router;
