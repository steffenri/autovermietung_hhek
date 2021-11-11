var restify = require("restify");
var errors = require("restify-errors");
const port = process.env.PORT || 8080;
let endpoint = "/api";

function respond(req, res, next) {
  res.send("hello " + req.params.name);
  next();
}

// function post(req, res, next) {
//   let body = req;
//   res.send(200);
//   console.log(
//     "this is the respond:",
//     res,
//     "this is the request:",
//     req,
//     "this is next:",
//     next
//   );
//   next();
// }

server.post("api/", function (req, res, next) {
  if (req.body.message) {
    var text = req.body.message;
    console.log(text);
    res.send(200, { response: "OK" });
  } else {
    res.send(400, { response: "Incorrect JSON structure" });
  }
  return next();
});

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
