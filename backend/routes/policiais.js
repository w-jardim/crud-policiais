// Rotas para policiais
const express = require('express');
const router = express.Router();
const policiaisController = require('../controllers/policiaisController');

router.post('/', policiaisController.cadastrarPolicial);
router.get('/', policiaisController.listarPoliciais);
router.get('/:id', policiaisController.obterPolicial);
router.put('/:id', policiaisController.atualizarPolicial);
router.delete('/:id', policiaisController.removerPolicial);

module.exports = router;
