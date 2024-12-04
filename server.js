import http from "http";

const PORT = 3000;

const rotas = {
    "/": "Express API",
    "/livros": "Rota para livros",
    "/autores": "Rota para autores",
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(rotas[req.url]);
});

server.listen(PORT, () => {
    console.log("Servidor de pé");
});