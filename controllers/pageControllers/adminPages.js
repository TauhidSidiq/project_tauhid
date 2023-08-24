const {User, Trash, Transaction} = require('../../models');
const { Op } = require('sequelize');


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

const userActive = async (req, res) => {
  try {
    const users = await User.findAll()
    res.render("admin/users", {user : req.session.userName, users, status: req.query.status || "none", message: req.query.message || "none",})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const uploadTrash = async (req, res) => {
  try {
    const trashs = await Trash.findAll()
    const users = await User.findAll()
    res.render("admin/trash", {user : req.session.userName, users,trashs, status: req.query.status || "none", message: req.query.message || "none",})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const transactionPage = async (req, res) => {
  try {
    const transactions = await Transaction.findAll(
      {
        include: {
          model: User,
        },
      }
    );
    const userNames = transactions.map(transaction => {
      // Accessing the name property from the nested User object
      return transaction.User.name;
    });
    console.log(userNames)
    res.render("admin/transaction", {
      userNames,
      transactions,
      status: req.query.status || "none",
      message: req.query.message || "none",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
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
  userActive,
  uploadTrash,
  transactionPage,
}