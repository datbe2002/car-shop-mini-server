const Car = require("../models/Car");

//get all users
const handleGetAllCars = async (req, res) => {
  try {
    const car = await Car.find();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const handleCreateNewCar = async (req, res) => {
  try {
    //Create a new car
    const newCar = await new Car({
      name: req.body.name,
      year: req.body.year,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
    });
    //Save to DB
    const car = await newCar.save();
    res.status(200).json(car);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  handleGetAllCars,
  handleCreateNewCar,
};
