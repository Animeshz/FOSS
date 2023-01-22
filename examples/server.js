const http = require("http");
const host = 'localhost';
const port = 8000;

function requestListener(req, res) {
    res.writeHead(200);
    res.end("My first server!");
};

http.createServer(requestListener).listen(port, host);
