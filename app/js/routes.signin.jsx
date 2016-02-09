"use strict";

var React         = require("react");
var Router        = require('react-router');
var Route         = Router.Route;
//var Redirect      = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;

var App           = require("./components/app.component.jsx");
var Page1         = require("./components/sample/page1.component.jsx");
var Page2         = require("./components/sample/page2.component.jsx");

var NotFound      = require("./components/partials/notFound.component.jsx");

console.log("hoge");

module.exports = (
  <Route name="app" path="/" handler={App}>
    <Route path="/users/:username">
      <DefaultRoute name="userPage1" handler={Page1}/>
    </Route>
    <Route name="orgs" path="/orgs/:orgname">
      <Route path="console">
        <Route name="orgPage1" path="page1" handler={Page1}/>
        <Route name="orgPage2" path="page2" handler={Page2}/>
      </Route>
    </Route>
    <DefaultRoute name="home"                     handler={Page1}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
