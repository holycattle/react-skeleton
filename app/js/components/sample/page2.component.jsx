"use strict";

var React               = require("react");
var Link                = require("react-router").Link;

var Page2 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page2</h1>
        <Link to="orgPage1" params={{orgname: "test"}}>Page1</Link>
      </div>
    );
  }
});

module.exports = Page2;