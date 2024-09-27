const express = require('express')
const {login, register, getUserById } = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/login', login)
userRouter.post('/register', register)
userRouter.get('/:id', getUserById)


module.exports = userRouter