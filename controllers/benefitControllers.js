const { Benefit } = require('../models');

const createBenefit = async (req, res) => {
  try {
    const { name, point  } = req.body

    const newBenefit = await Benefit.create(
      {name, 
        point
      })
    res.status(201).json(newBenefit)
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

module.exports = {
  createBenefit,
}