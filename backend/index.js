// Ponto de entrada do backend Express
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const policiaisRoutes = require('./routes/policiais');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/policiais', policiaisRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
