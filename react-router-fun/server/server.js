const express = require('express');

//required sockets.io to work with websockets
const socket = require('socket.io');

// App setup- created express application. created server.
const app = express();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(_dirname, 'client/build')));
}
const PORT = 4000;
//created server and stored it in the variable
const server = app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
});

//static files
app.use(express.static('public'));

//SETUP socket.io on the frontend and server
//var io set equal to socket and invoking function and passing in the server we created above
//socket setup
let io = socket(server);

//listening for a connection. when connection is made we fire a callback function which is taking in socket
//and loggin in the console log
//also logs socket ID, the id is a socket connection. everytime a different user connects they get a 
//unique socket ID between the client and sserver
io.on('connection', (socket) => {


    console.log('made socket connection', socket.id)

    socket.on('disconnect', () => {
        console.log('disconnected', socket.id)
    });

});
