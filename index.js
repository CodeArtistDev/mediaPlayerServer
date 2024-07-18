//1. Import json-sevrer
const jsonServer = require('json-server');


//2. Create json server - create()
const mediaPlayerServer = jsonServer.create();
 
//3. create path for the json file(data) - router()
const router = jsonServer.router('db.json');

//4. Create middleware to parse json
const middleware = jsonServer.defaults();

//5. Allow server to use router and middleware
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

//6. Set up port for the server to run
PORT = 3000 || process.env.PORT

//7. Listen to the request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`Server running successfully at port number ${PORT}`);
})
