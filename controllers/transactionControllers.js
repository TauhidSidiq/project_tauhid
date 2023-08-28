const { Transaction, Trash, User } = require('../models');
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

    const user = await User.findOne({ where: 
      { id: idUser,}, })

    updatePoints = user.points + totalPoint
     User.update(
      {
        points: updatePoints
      },
      {
        where: { id: idUser, },
      }
    )
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

async function findtransaction(req, res) {
  try {
    const datatransaksi =  await Transaction.findAll(
      {
        include: {
          model: User,
        },
      }
    )
    res.status(200).json({
      status: "success",
      meesage: "success get all data transaction",
      data: datatransaksi,
    })

    const userNames = datatransaksi.map(transaction => {
      // Accessing the name property from the nested User object
      return transaction.User.name;
    });
    console.log(userNames[0])
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

const deleteTransaction = async (req, res) => {
  try {
    console.log(req.params.id)
    await Transaction.destroy({ where: { id: req.params.id, }, })
   res.redirect("/admin/transaction/?status=delete&message=Riwayat Berhasil dihapus")
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function Search(req, res) {
  try {

    // const typeOfFlight = req.query.typeOfFlight || "";
    // const from = req.query.from || "";
    // const to = req.query.to || "";
    // const depatureDate = req.query.depatureDate || "";
   
    const {
      name,
    } = req.body
    
    const responseData = await Transaction.findAll(
      {
        where: {
          from: from,
        },
      }
    )

    res.status(200).json({
      status: "success",
      data: responseData,
    })
    
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  createTransaction,
  findtransaction,
  deleteTransaction,
}