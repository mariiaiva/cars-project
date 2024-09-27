const Car = require("../models/car")

const getCars = async (req, res) => {
  const cars = await Car.find({})
  res.send(cars)
}

const getCar = async (req, res) => {
  const id = req.params.id
  const car = await Car.findById(id)
  res.send(car)
}

const addCar = async (req, res) => {
  const carName = req.body.name
  const carModel = req.body.model
  const carPrice = req.body.price
  const carImage = req.body.image
  const car = await Car.create({
    name: carName,
    model: carModel,
    price: carPrice,
    image: carImage
  })
  res.send(car)
}

// delete

const deleteCar = async (req, res) => {
  const id = req.params.id
  const car = await Car.findById(id)
  await Car.deleteOne(car)
  res.send(car)
}


// update

const editCar = async (req, res) => {
  const id = req.params.id
  const car = await Car.findById(id);
  const carBody = new Car(req.body);

  car.price = carBody.price
  car.name = carBody.name
  car.model = carBody.model
  car.image = carBody.image

  await Car.updateOne(car)
  res.send(car)
}


module.exports = {
  getCars,
  getCar,
  addCar,
  deleteCar,
  editCar
}
