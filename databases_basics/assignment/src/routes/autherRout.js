var express = require('express');
var autherRoute = express.Router();


var authers = [{ name: "Rhonda Byrne", dob: "01-02-12", imag: "ath1.jpg" },
{ name: "Ruskin Bond", dob: "02-02-12", imag: "ath2.jpg" },
{ name: "Chethan Bhagath", dob: "03-02-12", imag: "ath3.jpg" },
{ name: "A.J.Finn", dob: "04-02-12", imag: "ath4.jpg" },
{ name: "Ruskin Bond", dob: "02-02-12", imag: "ath2.jpg" }];
function athrou(nav) {

    autherRoute.route("/").get(function (req, res) {
        res.render('authers.ejs', {
            nav,
            title: "Authers",
            authers
        });
    });
    autherRoute.route("/:id").get(function (req, res) {
        const id = req.params.id;
        res.render('auther.ejs', {
            nav,
            title: "Auther",
            auther: authers[id]
        })
    })

    return autherRoute;

}
module.exports = athrou;