const bcrypt = require("bcrypt")
const {Admin, User} = require('../models');

const register = async (req, res) => {
  try {
    const {userName, password} = req.body

    const usernameExist = await Admin.findOne({
      where: {
        userName: userName.toLowerCase()
      }
    })

    if (usernameExist) {
      return res.status(400).render("admin/register", {status: "failed", message: "username telah digunakan"})
    }

    const hashedPassword = bcrypt.hashSync(password, 10)

    const newAdmin = await Admin.create({
      userName: userName.toLowerCase(), password: hashedPassword
    })

    return res.status(201).render("admin/register", {status: "success", message: "Registrasi Berhasil"})

  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const admin = await Admin.findOne({ where: 
      { userName: userName.toLowerCase(),}, })


      if (!admin) {
      return res.status(401).render("admin/loginTest", {status: "failed", message: "Admin tidak ditemukan"})
    }


    const passwordIsValid = bcrypt.compareSync(
      password,
      admin.password)

    if (!passwordIsValid) {
      return res.status(401).render("admin/loginTest", {status: "failed", message: "Password salah"})
    }

    req.session.userName = userName
    return res.render("admin/dashboardAdminTest",  {user : req.session.userName, firstLogin: true, status: "none"})

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

const registerUser = async (req, res) => {
  try {
    const {  name, email, password } = req.body

    const emailUser = await User.findOne({
      where: {
        email: email,
      },
    })

    if (emailUser) {
      return res.status(400).render("user/register", {status: "failed", message: "email telah digunakan"})
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    console.log(req.body)
    const newUser = await User.create(
      {name, 
        email,
        password: hash
      })
    res.status(201).render("user/register", {status: "success", message: "Registrasi Berhasil"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: 
      { email: email,}, })


      if (!user) {
      return res.status(401).render("user/login", {status: "failed", message: "User tidak ditemukan"})
    }

    console.log(user.name)
    const passwordIsValid = bcrypt.compareSync(
      password,
      user.password)

    if (!passwordIsValid) {
      return res.status(401).render("user/login", {status: "failed", message: "Password salah"})
    }

    req.session.name = user.name
    return res.render("user/indexUser",  {user : req.session.name, firstLogin: true, status: "none"})

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  register,
  login,
  registerUser,
  loginUser,
}