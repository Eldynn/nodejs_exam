const db = require('../models');

exports.createCake = (req, res) => {
  db.Cake.create(req.body)
    .then(newCake => {
      res
        .status(200)
        .json({
          message: 'Nouveau gateau crée avec succès !',
          newCake
        })
    })
    .catch(error => {
      res
        .status(400)
        .json({
          message: 'Oups ! On a pas pu créer ton gateau :(',
          error
        });
    });
};

exports.getAllCake = async (req, res) => {
  try {
    const cakes = await db.Cake.find();
    res.status(200).json(cakes);
  } catch (error) {
    res.status(400).json({
      message: 'Oups ! Pas de gateau dans la base ^^\'',
      error
    });
  }
};

exports.getAllCakeByBaker = async (req, res) => {
  try {
    const cakes = await db.Cake.find({ baker: req.query.baker }, 'name baker expirationDate').sort('expirationDate');
    res.status(200).json(cakes);
  } catch (error) {
    res.status(400).json({
      message: 'Oups ! Pas de gateau dans la base ^^\'',
      error
    });
  }
};

exports.getAllCakeGlutenFree = async (req, res) => {
  try {
    const cakes = await db.Cake.find({ isGlutenFree: true });
    res.status(200).json(cakes);
  } catch (error) {
    res.status(400).json({
      message: 'Oups ! Pas de gateau dans la base ^^\'',
      error
    });
  }
};

exports.getOneCake = async (req, res) => {
  try {
    const cake = await db.Cake.findById(req.params.id);
    res.status(200).json(cake);
  } catch (error) {
    res.status(404).json({
      message: 'Oups ! Pas de gateau portant votre id.',
      error
    });
  }
};

exports.updateOneCake = async (req, res) => {
  try {
    const cake = await db.Cake.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true });
    res.status(200).json(cake);
  } catch (error) {
    res.status(404).json({
      message: 'Oups ! Pas de gateau portant votre id.',
      error
    });
  }
};

exports.deleteOneCake = async (req, res) => {
  try {
    await db.Cake.findByIdAndDelete(req.params.id);
    res.status(200).json('Cake deleted !');
  } catch (error) {
    res.status(404).json({
      message: 'Oups ! Pas de gateau portant votre id.',
      error
    });
  }
};
