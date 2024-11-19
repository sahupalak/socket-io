const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path')


app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))


users = ['shri','palak','omshree','raghav','paridhi']


app.get('/',(req,res) =>{
    res.render('index')
})


io.on('connection', (socket) => { 
    console.log('user connected')

    socket.on('check',username =>{
        const ifUserExists = users.includes(username)
        //    console.log(ifUserExists)

    if(ifUserExists){
        socket.emit('result',true)
    }else{
        socket.emit('result',false)
    }
    })
 });


server.listen(3000, () =>{
console.log('server running at http://localhost:3000/')
});


