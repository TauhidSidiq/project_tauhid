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


module.exports = {
  dashboardPage, 
  aboutPage
}