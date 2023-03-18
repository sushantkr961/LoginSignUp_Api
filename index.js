const jsonServer = require("json-server"); // importing json-server liabrary
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3030; // use any port number

server.use(middlewares);
server.use(router);

server.listen(port);
