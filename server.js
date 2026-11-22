const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (_request, response) => {
  response.json({ message: 'API de data e hora da Aula 04', endpoint: '/api/datetime' });
});

app.get('/api/datetime', (_request, response) => {
  const now = new Date();
  response.json({
    iso: now.toISOString(),
    data: now.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    hora: now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
    fusoHorario: 'America/Sao_Paulo'
  });
});

app.listen(port, () => {
  console.log(`API disponível na porta ${port}`);
});
