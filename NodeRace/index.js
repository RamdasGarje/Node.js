const http = require('http');

const server = http.createServer( ( reg, res) => {
    if( res.url === '/'){
        res.write('Start Race.');
        res.end();
    }else{
        res.write('Race Started');
        res.end();
    }
    
});

server.listen('4000');