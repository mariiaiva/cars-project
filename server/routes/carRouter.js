const express = require('express')
const {getCars, getCar, addCar, deleteCar, editCar} = require('../controllers/carController')

const carRouter = express.Router()

carRouter.get('/', getCars)
carRouter.get('/:id', getCar)
carRouter.post('/', addCar)
carRouter.delete('/:id', deleteCar)
carRouter.put('/:id', editCar)

// delete
// update

module.exports = carRouter