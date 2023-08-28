const { Reward, User } = require('../models');

const createReward = async (req, res) => {
  try {
    const { idUser,name, point, } = req.body

    // const trashSelect = await Trash.findOne({
    //   where: {
    //     name: trash,
    //   },
    // })


    
    const user = await User.findOne({ where: 
      { id: idUser,}, })
    console.log(point)

    if(user.points < point) {
      const delay = 3000; // 3 seconds
      setTimeout(() => {
        res.status(400).redirect(
          "/users/dashboard?status=failed&message=Point Kurang"
        );
      }, delay);
    }
    else {
      updatePoints = user.points - point
      User.update(
       {
         points: updatePoints
       },
       {
         where: { id: idUser, },
       }
     )
     const newReward = await Reward.create(
       {idUser, name, point })
       const delay = 3000; // 3 seconds
       setTimeout(() => {
         res.status(201).redirect(
           "/users/dashboard?status=success&message=Berhasil Tukar Point"
         );
       }, delay);
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

async function findReward(req, res) {
  try {
    const datareward =  await Reward.findAll(
      {
        include: {
          model: User,
        },
      }
    )
    res.status(200).json({
      status: "success",
      meesage: "success get all reward",
      data: datareward,
    })

    const userNames = datareward.map(reward => {
      // Accessing the name property from the nested User object
      return reward.User.name;
    });
    console.log(userNames[0])
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}


const deleteReward = async (req, res) => {
  try {
    console.log(req.params.id)
    await Reward.destroy({ where: { id: req.params.id, }, })
   res.redirect("/admin/reward/?status=delete&message=Riwayat Berhasil dihapus")
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports= {
  createReward,
  findReward,
  deleteReward,
}