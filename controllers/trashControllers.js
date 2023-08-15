const { Trash } = require('../models');

const CreateTrash = async (req, res) => {
  try {
    const { name, point  } = req.body

    const newTrash = await Trash.create(
      {name, 
        point
      })
    res.status(201).json(newTrash)
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

module.exports = {
  CreateTrash,
}