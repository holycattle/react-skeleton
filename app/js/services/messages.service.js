"use strict";

var _       = require("lodash");
var moment  = require("moment");

function Messages() {
  function setup(data, lang) {
    _lang = lang;
    _.extend(self, data);
  }
  function format(fmt) {
    for (var i = 1; i < arguments.length; i++) {
      var reg = new RegExp("\\{" + (i - 1) + "\\}", "g");
      fmt = fmt.replace(reg,arguments[i]);
    }
    return fmt;
  }
  function formatDate(date, fmt, includeTime) {
    function hasTime() {
      return d.hours() !== 0 || d.minutes() !== 0 || d.seconds() !== 0 || d.milliseconds() !== 0;
    }
    function getFormat(withTime) {
      var ret = _lang === "ja" ? "YYYY-MM-DD" : "MMM DD YYYY";
      if (withTime) {
        ret += " HH:mm:ss";
      }
      return ret;
    }
    if (!date) {
      return "-";
    }
    if (typeof(includeTime) === "undefined") {
      includeTime = true;
    }
    if (typeof(fmt) === "boolean") {
      includeTime = fmt;
      fmt = null;
    }
    var d = moment(date);
    if (!d.isValid()) {
      return date;
    }
    if (!fmt) {
      fmt = getFormat(hasTime() && includeTime);
    }
    return d.format(fmt);
  }
  function formatDuration(duration, short) {
    if (!duration) {
      return null;
    }
    if (typeof(duration.asMinutes) === "function") {
      duration = duration.asMinutes();
    }
    if (duration <= 0) {
      return null;
    }
    var days = Math.floor(duration / 1440);
    var hours = Math.floor((duration % 1440) / 60);
    var minutes = Math.floor((duration % 1440) % 60);

    var formattedString = [];
    if (days !== 0) {
      formattedString.push(days + " " + (days === 1 ? self.day : self.days));
    }
    if (hours !== 0) {
      formattedString.push(hours + " " + (hours === 1 ? self.hour : self.hours));
    }
    if (minutes !== 0) {
      formattedString.push(minutes + " " + (minutes === 1 ? self.min : self.mins));
    }
    if (short) {
      formattedString = [formattedString.shift()];
    }

    return formattedString.join(" ");
  }
  function getLanguage() {
    return _lang;
  }
  var _lang = "en";
  var self = this;
  _.extend(this, {
    setup: setup,
    format: format,
    formatDate: formatDate,
    formatDuration: formatDuration,
    getLanguage: getLanguage
  });
}

module.exports = new Messages();
