const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.foodItems, global.foodCategory]);
  } catch (err) {
    console.log(err.message);
    res.send("Server error");
  }
});
module.exports = router;
