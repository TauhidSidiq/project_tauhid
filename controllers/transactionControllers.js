const { Transaction, Trash } = require('../models');
const imagekit = require("../middleware/imagekit")


const createTransaction = async (req, res) => {
  try {
    const { idUser,trash, weight ,desc } = req.body

    const trashSelect = await Trash.findOne({
      where: {
        name: trash,
      },
    })

    totalPoint = trashSelect.point * weight

    const file = req.file

    const validFormat =
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    if (!validFormat) {
      return res.status(400).json({
        status: "failed",
        message: "Wrong Image Format",
      })
    }

    const split = file.originalname.split(".")
    const ext = split[split.length - 1]

    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${ext}`,
    })

    const newTransaction = await Transaction.create(
      {idUser,trash, weight ,desc, image: img.url, points: totalPoint
      })
      const delay = 3000; // 3 seconds
      setTimeout(() => {
        res.status(201).redirect(
          "/admin/form/trash?status=success&message=Berhasil Upload Sampah"
        );
      }, delay);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createTransaction,
}