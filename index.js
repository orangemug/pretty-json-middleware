module.exports = function(opts) {
  opts = opts || {};
  var queryKey = opts.query  || "pretty";
  var spaces   = opts.spaces || 2;

  return function(req, res, next) {
    function send(fn, body) {
      var enabled = req.query.hasOwnProperty(queryKey);

      if(enabled) {
        // Save state
        var oldSpaces   = req.app.get("json spaces");
        req.app.set("json spaces", spaces);

        // Call function
        fn.call(res, body);

        // Restore state
        req.app.set("json spaces", oldSpaces);
      }
      else {
        fn.call(res, body);
      }
    }

    // Wrap functions
    res.send  = send.bind(null, res.send);
    res.json  = send.bind(null, res.json);

    next();
  }
};
