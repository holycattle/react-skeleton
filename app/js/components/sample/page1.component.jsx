"use strict";

var React               = require("react");
var moment              = require("moment");
var Link                = require("react-router").Link;
var MSG                 = require("../../services/messages.service");

var Page1 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Page1</h1>
        <Link to="orgPage2" params={{orgname: "test"}}>Page2</Link>
        <h2>Message Test</h2>
        <ul>
          <li>{MSG.exam}</li>
          <li>{MSG.formatDate(moment())}</li>
        </ul>
      </div>
    );
  }
});

module.exports = Page1;