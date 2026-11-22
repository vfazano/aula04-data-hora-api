# Aula 04: API de data e hora

API Node.js + Express que responde com data e hora atuais em JSON.

## Executar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000/api/datetime`. A resposta contém `iso`, `data`, `hora` e `fusoHorario`.

## Publicar no Render

1. Crie um repositório GitHub para esta pasta e envie os arquivos.
2. No Render, crie um **Web Service** conectado ao repositório.
3. Use `npm install` como Build Command e `npm start` como Start Command.
4. Após o deploy, teste `/api/datetime` na URL pública gerada pelo Render.

A URL ainda precisa ser preenchida depois da publicação; nenhum deploy foi realizado por este projeto local.
