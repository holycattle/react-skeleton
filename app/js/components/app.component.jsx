"use strict";

var React               = require("react");
var RouteHandler        = require("react-router").RouteHandler;
var Header              = require("./partials/header.component.jsx");
var SideMenu            = require("./partials/sidemenu.component.jsx");

var App = React.createClass({
  hasSideMenu: function() {
    return /\/orgs\/.*\/console\//.test(location.pathname);
  },
  render: function() {
    return (
      <div className="app">
        <Header/>
        <div className="workspace">
          {this.hasSideMenu() ? <SideMenu/> : null}
          <div className={this.hasSideMenu() ? "content-with-sidemenu" : "content"}>
            <RouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;