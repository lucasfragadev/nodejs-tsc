import * as http from 'http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World! Welcome to my life!');
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Erro na solicitação');
  }
});

server.listen(8080, () => {
  console.log('Servidor rodando na porta 8080');
  console.log('http://localhost:8080/');
});

