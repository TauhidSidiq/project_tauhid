
const loginAdminPage = async (req, res) => {
  try {
    res.render("admin/login", {status: "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const loginAdminTestPage = async (req, res) => {
  try {
    res.render("admin/loginTest", {status: "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const dashboardAdminPage = async (req, res) => {
  try {
    res.render("admin/dasboardAdmin",  {user : req.session.userName, firstLogin: false, status:req.query.status|| "none",message: req.query.message || "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const dashboardAdminPageTest = async (req, res) => {
  try {
    res.render("admin/dashboardAdminTest",  {user : req.session.userName, firstLogin: false, status:req.query.status|| "none",message: req.query.message || "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const registerAdminPage = async (req, res) => {
  try {
    res.render("admin/register", {status: "none"})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const logoutAdminPage = async (req, res) => {
  try {
    req.session.destroy(function(err){
      if(err){
          console.log(err);
          res.send("Error")
      }else{
          res.render('admin/login', { title: "Express", logout : "logout Successfully...!", status: "none"})
      }
  })

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

const logoutAdminPageTest = async (req, res) => {
  try {
    req.session.destroy(function(err){
      if(err){
          console.log(err);
          res.send("Error")
      }else{
          res.render('admin/loginTest', { title: "Express", logout : "logout Successfully...!", status: "none"})
      }
  })

  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  loginAdminPage,
  logoutAdminPage,
  dashboardAdminPage,
  registerAdminPage,
  loginAdminTestPage,
  dashboardAdminPageTest,
  logoutAdminPageTest,
}