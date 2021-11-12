const express = require('express');
const router = express.Router();
const rest = require('../controller');

router.get('/pokemon/index', rest.Test.index);
router.get('/pokemon', rest.pokemon.getAll);
router.get('/pokemon/:id', rest.pokemon.get);
router.post('/pokemon/create', rest.pokemon.create);
router.get('/pokemon/nickname/:id/rename', rest.pokemon.renameNickname)
router.get('/pokemon/release/:id', rest.pokemon.release)

module.exports = router;