const express = require("express");
const chalk = require("chalk");
const path = require("path");
const bodyparser = require("body-parser");
const cors = require("cors");

var app = new express();
var nav = [
    { link: '/', title: "Index" },
    { link: '/edit', title: "Edit" },
    { link: '/search', title: "Search" },
    { link: '/view', title: "View" }
];






app.use(express.static(path.join(__dirname, "/public")));
app.use(cors());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: true
}))
app.set("views", "./src/views");
app.set("view engine", "ejs");


// const booksRouter = require('./src/routes/bookRoutes')(nav);//passing nav to booksRouter
// const autherRoute = require('./src/routes/autherRout')(nav) //passing nav to author
// const loginrouter = require('./src/routes/loginrouter')(nav) //passing nav to login
// const signuprouter = require('./src/routes/signuprouter')(nav) //passing nav to login

// app.use('/books', booksRouter);
// app.use('/authers', autherRoute);
// app.use('/login',loginrouter);
// app.use('/signup',signuprouter);



app.get("/", function (req, res) {
    res.render("index",
        {
            nav,
            title: "HOME",

        });

});

app.listen(3000, function () {
    console.log("listerning to port" + chalk.green('3000'))
});