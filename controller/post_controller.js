const Post = require('../model/post_model')

exports.addPost = async (req, res) => {
    try {
        await Post.create({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image
        })
        res.send("Post created successfully")
    } catch (error) {
        res.status(400).send(error)
    }

}
exports.showPosts = async (req, res, next) => {
    try {
        const result = await Post.find()
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.showSinglePost = async (req, res) => {
    try {
        const result = await Post.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(400).send(err)
    }
}

exports.updatePost = async (req, res) => {
    try {
       const doc = await Post.findOneAndUpdate(
            { title: req.body.title },
            { description: req.body.description},
            {useFindAndModify : false,new:true}
        )
        res.send("updated succesfully")
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.deletePost = async (req,res) => {
    try {
        await Post.findOneAndDelete({title:req.params.name})
        res.send("post deleted succesfully")
    } catch (error) {
        res.status(400).send(error)
    }
}
exports.showIndex = (req, res, next) => {
    console.log("running node api")
}