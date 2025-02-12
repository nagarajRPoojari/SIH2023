const express = require("express");
const User = require("../../../module/user");

module.exports.renderLogin = (req, res) => {
  res.render("login");
};

module.exports.login = async (req, res) => {
  res.redirect("/");
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  req.flash("success", "Logged out successfully");
  res.redirect("/");
};
