var assert     = require("assert");
var express    = require("express");
var got        = require("got");
var prettyJson = require("../");


describe("pretty-json-middleware", function() {
  var port;

  var input = {one: 1};
  var outputNorm = "{\"one\":1}";
  var outputPretty = "{\n  \"one\": 1\n}";

  before(function(done) {
    var app = express();
    app.get("/json", function(req, res) {
      res.json(input);
    })
    app.get("/send", function(req, res) {
      res.send(input);
    })

    app.use(prettyJson());

    var server = app.listen(0, function(err) {
      if(err) {
        done(err)
      }
      else {
        port = server.address().port;
        done();
      }
    })
  });

  function url(port, path) {
    return "http://localhost:"+port+path;
  }


  describe("non-pretty", function() {
    it("Response#json", function() {
      return got(url(port, "/json"))
        .then(function(resp) {
          assert.equal(resp.body, outputNorm)
        });
    });

    it("Response#send", function() {
      return got(url(port, "/send"))
        .then(function(resp) {
          assert.equal(resp.body, outputNorm)
        });
    });
  })

  describe("pretty", function() {
    it("Response#json", function() {
      return got(url(port, "/json?pretty"))
        .then(function(resp) {
          assert.equal(resp.body, outputNorm)
        });
    });

    it("Response#send", function() {
      return got(url(port, "/send?pretty"))
        .then(function(resp) {
          assert.equal(resp.body, outputNorm)
        });
    });
  })
});

