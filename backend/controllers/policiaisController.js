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

exports.obterPolicial = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const p = await policialModel.obter(id);
    if (!p) return res.status(404).json({ error: 'Policial não encontrado' });
    res.json(p);
  } catch (err) {
    next(err);
  }
};

exports.atualizarPolicial = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await policialModel.atualizar(id, req.body);
    res.json(result);
  } catch (err) {
    if (err.message && err.message.includes('obrigatório')) return res.status(400).json({ error: err.message });
    next(err);
  }
};

exports.removerPolicial = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    await policialModel.remover(id);
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};
