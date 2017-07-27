const tcp = require('net');
let server = tcp.createServer();

server.on('connection', (socket) => {
    
    let remoteAddress = socket.remoteAddress + ":" + socket.remotePort;
    
    console.log('New Connection From %s', remoteAddress);

    socket.on('data', (data) => {
        console.log('data from - %s - %s', remoteAddress, data);
        socket.write('hey , received data -' + data);
    });

    socket.once('close', () => {
        console.log('connection closed from %s ', remoteAddress);
    });

      socket.once('error', (err) => {
        console.log('Error %s ', err.message);
    })
});
server.listen(9090,()=>{
    console.log('Synechron TCP Server is Listning %j',server.address());
})



