const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/api_routes')
const app = express()
app.use(express.urlencoded({
    extended: false
}
))
app.use(express.json())
app.use('/', postRoutes)
mongoose
    .connect('mongodb+srv://flutteradv:Naja8519@cluster0-tz3as.mongodb.net/admin?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        dbName: 'test'
    })
    .then(() => {
        app.listen(2000, console.log('Server started at porst 2000'));
    })
    .catch(err => console.log(err));
app.get('/', (req, res) => {
    res.send("running node api")
})
