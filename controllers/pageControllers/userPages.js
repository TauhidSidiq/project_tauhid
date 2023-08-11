const {Files, FileBmm, FileFkap, FileKeuangan, FilePemasaran, FileProduksi, FileSdm, FileSekretariat, FileSpi, Documents, Departements} = require('../../models');

const dashboardPage = async (req, res) => {
  try {
    const items = await Documents.findAll(
      {
        include: {
          model: Departements,
          include: Files,
        },
      }
    )
    res.render("index", {items,})
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}


module.exports = {
  dashboardPage,
}