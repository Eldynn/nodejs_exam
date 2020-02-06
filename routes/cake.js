const express = require('express');
const router = express.Router();
const handlersCake = require('../handlers/cake');

router.route('/')
  .post(handlersCake.createCake)
  .get((req, res) => {
    if (req.query.isGlutenFree === true) {
      handlersCake.getAllCakeGlutenFree(req, res);
    } else if (req.query.baker) {
      handlersCake.getAllCakeByBaker(req, res);
    } else {
      handlersCake.getAllCake(req, res);
    }
  });

router.route('/:id')
  .get(handlersCake.getOneCake)
  .put(handlersCake.updateOneCake)
  .delete(handlersCake.deleteOneCake);

module.exports = router;
