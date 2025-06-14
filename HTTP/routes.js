const http= require('http');

const server= http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the Home Page!\n');
    }else if(url === '/projects'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to the Projects Page!\n');
    }
    
    else if(url==='/about')
    {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('About Page Not Found!\n');
    }
});
const port = 3000;
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});