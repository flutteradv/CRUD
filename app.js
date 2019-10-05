const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.urlencoded({
        extended: false
    }
))
app.use(express.json())
mongoose
    .connect('mongodb+srv://flutteradv:Naja8519@cluster0-tz3as.mongodb.net/admin?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(2000, console.log('Server started at porst 3000'));
    })
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send("running node api")
})
