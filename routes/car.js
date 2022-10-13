const {
  handleGetAllCars,
  handleCreateNewCar,
} = require("../controllers/carController");

const router = require("express").Router();

router.get("/cars", handleGetAllCars);
router.post("/create-car", handleCreateNewCar);
module.exports = router;
