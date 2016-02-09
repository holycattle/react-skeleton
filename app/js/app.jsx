"use strict";
var $            = require("jquery");
var React        = require("react");
var ReactDOM     = require("react-dom");
var Router       = require("react-router");
var MSG          = require("./services/messages.service.js");

$(function() {
  var $body   = $("body");
  var $main = $body.find(".main")[0];

  MSG.setup(require("./messages.json.js"), "en");

  var routes       = require("./routes.signin.jsx");
  Router.run(routes, Router.HistoryLocation, function(Handler) {
    ReactDOM.render(<Handler/>, $main);
  });
});
