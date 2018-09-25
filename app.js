 var app = require('http').createServer(index)
   , io = require('socket.io').listen(app)
   , fs = require('fs')
 ;
var server_port = process.env.YOUR_PORT || process.env.PORT || 80;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
 function index(req, res){
   fs.readFile(__dirname + '/index.html', function(err, data){
 res.writeHead(200);
     res.end(data);
   });
 };

var terminais = []
  io.on('connection', function(socket){

    ter = 555
    if(terminais[ter]){

    }else{
      
      terminais[ter] = socket.id
      console.log(terminais)
   
    }




   // Envia o total de visitas para os demais usuários.
   //socket.broadcast.emit('visits', visitas);
   // Evento disconnect ocorre quando sai um usuário.
   socket.on('disconnect', function(){

   });


 });