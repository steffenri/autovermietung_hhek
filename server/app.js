var restify = require("restify");
var errors = require("restify-errors");
const port = process.env.PORT || 8080;

function respond(req, res, next) {
  res.send("hello " + req.params.name);
  next();
}

function post(request, respond, next) {
  body = request.params.body;
  respond.send(200);
  console.log(body);
  next();
}

var server = restify.createServer({ name: "autovermietung_hhek" });
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);
server.post("/api/test", post);

server.pre((request, response, next) => {
  console.info(`${request.method} - ${request.url}`);
  return next();
});

server.listen(port, function () {
  console.log("%s listening at %s", server.name, server.url);
});
