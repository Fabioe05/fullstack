const app = require('./app.js');
const http = require('http');

const server = http.createServer(app);

const PORT = process.env.PORT || 3003;

server.listen(PORT, () =>{
    console.log(`El servidor esta ejecutandose en el puerto ${PORT}`);
   
})
