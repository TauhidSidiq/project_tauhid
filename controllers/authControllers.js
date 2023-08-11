const bcrypt = require("bcrypt")
const {Admin} = require('../models');

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
      return res.status(401).render("admin/login", {status: "failed", message: "Admin tidak ditemukan"})
    }


    const passwordIsValid = bcrypt.compareSync(
      password,
      admin.password)

    if (!passwordIsValid) {
      return res.status(401).render("admin/login", {status: "failed", message: "Password salah"})
    }

    req.session.userName = userName
    return res.render("admin/dasboardAdmin",  {user : req.session.userName, firstLogin: true, status: "none"})

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  register,
  login,
}