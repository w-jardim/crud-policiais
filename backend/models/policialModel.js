// Model para policiais
const pool = require('../db');
const bcrypt = require('bcryptjs');
const { cpf: cpfValidator } = require('cpf-cnpj-validator');

function validarCampos(data) {
  const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = data;
  if (!rg_civil || !rg_militar || !cpf || !data_nascimento || !matricula) {
    throw new Error('Todos os campos são obrigatórios.');
  }
  if (!cpfValidator.isValid(cpf)) {
    throw new Error('CPF inválido.');
  }
  // Validação simples de data (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data_nascimento)) {
    throw new Error('Data de nascimento deve estar no formato YYYY-MM-DD.');
  }
}

exports.cadastrar = async (data) => {
  validarCampos(data);
  const { rg_civil, rg_militar, cpf, data_nascimento, matricula } = data;
  const matriculaHash = await bcrypt.hash(matricula, 10);
  try {
    const [result] = await pool.execute(
      `INSERT INTO policiais (rg_civil, rg_militar, cpf, data_nascimento, matricula)
       VALUES (?, ?, ?, ?, ?)`,
      [rg_civil, rg_militar, cpf, data_nascimento, matriculaHash]
    );
    return { id: result.insertId, rg_civil, rg_militar, cpf, data_nascimento };
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      throw new Error('RG civil, RG militar ou CPF já cadastrado.');
    }
    throw err;
  }
};

exports.listar = async () => {
  const [rows] = await pool.execute(
    'SELECT id, rg_civil, rg_militar, cpf, data_nascimento FROM policiais'
  );
  return rows;
};
