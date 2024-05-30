const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: "localhost",
  port: "3307",
  user: "root",
  password: "Solaris12#",
  database: "online_banking",
});

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }

    res.redirect("/login");
  });
};
