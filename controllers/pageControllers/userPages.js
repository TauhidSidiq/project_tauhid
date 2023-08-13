// const {Files, FileBmm, FileFkap, FileKeuangan, FilePemasaran, FileProduksi, FileSdm, FileSekretariat, FileSpi, Documents, Departements} = require('../../models');

const dashboardPage = async (req, res) => {
  try {
    res.render("user/index")
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const aboutPage = async (req, res) => {
  try {
    res.render("user/about")
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const registerPage = async (req, res) => {
  try {
    res.render("user/register", {status: "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const loginUserPage = async (req, res) => {
  try {
    res.render("user/login", {status: "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const dashboardUserPage = async (req, res) => {
  try {
    res.render("user/indexUser",  {user : req.session.name, firstLogin: false, status:req.query.status|| "none",message: req.query.message || "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const logoutUserPage = async (req, res) => {
  try {
    req.session.destroy(function(err){
      if(err){
          console.log(err);
          res.send("Error")
      }else{
          res.render('user/login', { title: "Express", logout : "logout Successfully...!", status: "none"})
      }
  })

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  dashboardPage, 
  aboutPage,
  registerPage,
  loginUserPage,
  dashboardUserPage,
  logoutUserPage,
}