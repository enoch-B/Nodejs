const http= require('http');

const server = http.createServer((req, res) => {
    console.log(req,'Request received');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
});

const PORT = 3000;
 server.listen(PORT),() => {
    console.log(`Server is running on http://localhost:${PORT}`);
 }