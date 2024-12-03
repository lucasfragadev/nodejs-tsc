// Importando o módulo Express
import express from 'express';

// Cria a variável "app", sendo ela a principal do código
const app = express();

// Rota para a página inicial
app.get('/', (req, res) => {
  res.status(200).send('Seja bem vindo ao meu app.');
});

// Rota para a página "Sobre"
app.get('/sobre', (req, res) => {
  res.status(200).send('Minha Página Sobre.');
});

app.get('/contato', (req, res) => {
  res.status(200).send('Minha Página Contato.')
})

// essa função deve ser a última do código, serve para iniciar o server.
app.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
  console.log('http://localhost:8080');
});

