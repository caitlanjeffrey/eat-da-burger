const express = require("express")
const expressHandlebars = require("express-handlebars")
const mysql = require("mysql")

const app = express()

// const apiRoutes = require("./app/routes/apiRoutes")
// const htmlRoutes = require("./app/routes/htmlRoutes")


// port listener
const PORT = process.env.PORT || 8080

// setting up express server
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//allows sending of additional files through the 'public folders'
app.use(express.static("./app/public"))

// apiRoutes(app)
// htmlRoutes(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});