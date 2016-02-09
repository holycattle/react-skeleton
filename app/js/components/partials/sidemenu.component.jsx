"use strict";

var React               = require("react");
var Link                = require("react-router").Link;

var SideMenu = React.createClass({
  render: function() {
    return (
      <div className="sidemenu">
        <h3>SideMenu</h3>
        <ul>
          <li><Link to="orgPage1" params={{orgname: "test"}}>Page1</Link></li>
          <li><Link to="orgPage2" params={{orgname: "test"}}>Page2</Link></li>
        </ul>
      </div>
    );
  }
});

module.exports = SideMenu;