 var app = require('http').createServer(index)
   , io = require('socket.io').listen(app)
   , fs = require('fs')
 ;
 app.listen(3000, function() {
   console.log("Servidor rodando!");
 });
 function index(req, res){
   fs.readFile(__dirname + '/index.html', function(err, data){
 res.writeHead(200);
     res.end(data);
   });
 };


  io.on('connection', function(socket){


   console.log("sim!")
   // Envia o total de visitas para os demais usuários.
   //socket.broadcast.emit('visits', visitas);
   // Evento disconnect ocorre quando sai um usuário.
   socket.on('disconnect', function(){

   });


 });