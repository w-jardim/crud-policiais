// Controller para policiais
const policialModel = require('../models/policialModel');

exports.cadastrarPolicial = async (req, res, next) => {
  try {
    const result = await policialModel.cadastrar(req.body);
    res.status(201).json(result);
  } catch (err) {
    // Se for erro de validação, retorna 400
    if (err.message && (
      err.message.includes('obrigatório') ||
      err.message.includes('inválido') ||
      err.message.includes('já cadastrado')
    )) {
      return res.status(400).json({ error: err.message });
    }
    next(err);
  }
};

exports.listarPoliciais = async (req, res, next) => {
  try {
    const lista = await policialModel.listar();
    res.json(lista);
  } catch (err) {
    next(err);
  }
};
