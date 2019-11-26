var express = require('express');
var booksRouter = express.Router();




var books = [
    { title: 'The secret', genre: "MYSTRY", auther: "Rhonda Byrne", img: "1stimg.jpg" },
    { title: 'The Blue Umbrella', genre: "STORY", auther: "Ruskin Bond", img: "2ndimg.jpg" },
    { title: 'Half Boyfriend', genre: "LOVE", auther: "Chethan Bhagath", img: "3rdimg.jpg" },
    { title: 'Women in The Window', genre: "Drama", auther: "A.J.Finn", img: "4thimg.jpg" },
    { title: 'The Blue Umbrella', genre: "Thrilller", auther: "Ruskin bond", img: "5thimg.jpg" }
];

function router(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            res.render('books.ejs', {
                nav,
                title: "BOOKS",
                books
            })
        })


    booksRouter.route("/addbook").get(function (req, res) {
        res.render('addbook.ejs',
            {
                nav,
                title: "Add Book",
                books

            })
    })

    booksRouter.route("/save").post(function (req, res) {
        //res.send('save lksfgisgjk'),
        res.render('save',{
             nav,
             title:"YOUR BOOK DETAILS ARE SAVED!!",
             books  
//        console.log(req.body),
        

    })
})

    booksRouter.route('/:id').get(function (req, res) {
        const id = req.params.id;
        res.render('book', {
            nav,
            title: "BOOKS",
            book: books[id]
        })
    })
    return booksRouter;
}
module.exports = router;