var socket = io();

socket.on('connect', funciton () {
    console.log('Connected to socket.io server!');
});
