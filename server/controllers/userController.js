const User = require("../models/user")

const login = async (req, res) => {
  console.log(req.body);

  const email = req.body.email
  const password = req.body.password

  const user = await User.findOne({ email, password });
  if (!user)
    res.status(404).json({ message: "Invalid email or password" });
  else {
    res.send(user);
  }
}

const register = async (req, res) => {
  const name = req.body.name
  const surname = req.body.surname
  const email = req.body.email
  const password = req.body.password

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists with this email" });
  }

  const user = await User.create({
    name: name,
    surname: surname,
    email: email,
    password: password
  })
  res.send(user)
}

const getUserById = async (req, res) => {
  const id = req.params.id
  const existingUser = await User.findById(id);

  if (existingUser) {
    res.send(existingUser);
    return;
  }
  res.status(404).json({ message: "User not found" });
}


module.exports = {
  login,
  register,
  getUserById
}
