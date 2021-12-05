const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketio(server, {
    cors: {
    origin: "https://whatsappbyashitosh.herokuapp.com",
    methods: ["GET","POST"]
                               }
});
const PORT = process.env.PORT || 9000;

let users = [];
const addUser = (userId,socketId)=>
{
    !users.some(user => user.userId === userId) && users.push({userId,socketId})
}

const getUser = (userId)=>
{
    return users.find(user => user.userId === userId)
}

const removeUser = (socketId)=>
{
    users = users.filter(user => user.socketId !== socketId);
}


io.on('connection',(socket)=>
{
    console.log('User connected');
//connect
    socket.on('addUser',userId =>
    {
        addUser(userId,socket.id);
       io.emit('getUsers',users);
       //console.log(users)
    })

    //send messages
    socket.on('sendMessage',({senderId, receiverId , text})=>
    {
        const user = getUser(receiverId);
        //console.log(text);
        user && io.to(user.socketId).emit('getMessage',{
            senderId,text
        })
    })
    //disconnect
    socket.on('disconnect',()=>
    {
        console.log('User Disconnected');
        removeUser(socket.id);
        io.emit('getUsers',users);
    })
})
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

