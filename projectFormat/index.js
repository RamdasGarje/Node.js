const  http = require('http');
const server = http.createServer( ( reg, res) => {
    if( reg.url === '/'){
        res.write('It is a home page.');
        res.end();
    }else if( reg.url === '/about'){
        res.write('It is a about page.');
        res.end();
    }else if( reg.url === '/products'){
        res.write('There is all products.');
        res.end();
    }else{
        res.write('<oops server down>');
        res.end();
    }
});

server.listen('3000');