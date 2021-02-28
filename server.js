const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World!");
  });

server.listen(port, hostname, () => {
  console.log(`Servidor web rodando em http://${hostname}:${port}/`);
});


