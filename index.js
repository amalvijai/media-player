// import json-server in index.js file

const jsonServer = require('json-server')
    

// create a server for json file

const mediaPlayerSever = jsonServer.create()

// setup a path for json file

const router = jsonServer.router('db.json')

// return a middleware used by json server

const middlewares = jsonServer.defaults()

// set up port for running server

const port = 4000 || process.env.port

// use middleware and router in server
mediaPlayerSever.use(middlewares)
mediaPlayerSever.use(router)

// to listen server for resolving request from server

mediaPlayerSever.listen(port,()=>{
    console.log(`mediaplayer listening at port ${port},and waiting for client request!!`);
})

