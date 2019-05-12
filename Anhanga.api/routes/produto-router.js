'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/produto-controller');

let _ctrt = new controller();

router.get('/', _ctrt.get);
router.get('/:id', _ctrt.getById);
router.post('/', _ctrt.post);
router.put('/:id', _ctrt.put);
router.delete('/:id', _ctrt.delete);

module.exports = router;