const Post = require('../model/post_model')

exports.addPost = (req,res,next) => {
    const post = new Post(
        {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image
        }
    )
    post.save()
        .then(() => {
            res.send("Post added succesfully")
        })
        .catch(err => {
            res.status(400).send(err)
        })
}

exports.showIndex = (req,res,next) => {
    console.log("running node api")
}