const admin = (req, res, next) => {
  if (!req.session.userName) {
    return res.redirect('/login/admin');
  }
  next();
};

module.exports = admin
