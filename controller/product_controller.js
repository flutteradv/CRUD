const Product = require('../model/product')

exports.addProduct = async (req, res) => {
    try {
        await Product.create({
            'product-id': req.body['product-id'],
            name: req.body.name,
            category: req.body.category,
            image: req.body.image,
            type: req.body.type,
            subCategory: req.body.subCategory,
            volume: req.body.volume,
            price: req.body.price,
            description: req.body.description
        })
        res.send("Product created successfully")
    } catch (error) {
        res.status(400).send(error)
    }

}
exports.showProducts = async (req, res, next) => {
    let filter = {}
    if(req.query['product-id'] !== undefined){
        filter['product-id'] = req.query['product-id']
    }
    if(req.query.search !== undefined){
        filter.name = new RegExp(req.query.search, 'i')
    }
    if(req.query.category !== undefined){
        filter.category = req.query.category
    }else if(req.query.search === undefined && req.query['product-id'] === undefined){
        filter.category = "beer"
    }
    if(req.query.type !== undefined){
        filter.type = req.query.type
    }
    console.log(filter)
    try {
        const result = await Product.find(filter)
        res.send(result)
    } catch (error) {
        res.status(400).send(error)
    }
}
// exports.showSinglePost = async (req, res) => {
//     try {
//         const result = await Post.findById(req.params.id)
//         res.send(result)
//     } catch (error) {
//         res.status(400).send(err)
//     }
// }

// exports.updatePost = async (req, res) => {
//     try {
//        const doc = await Post.findOneAndUpdate(
//             { title: req.body.title },
//             { description: req.body.description},
//             {useFindAndModify : false,new:true}
//         )
//         res.send("updated succesfully")
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }
// exports.deletePost = async (req,res) => {
//     try {
//         await Post.findOneAndDelete({title:req.params.name})
//         res.send("post deleted succesfully")
//     } catch (error) {
//         res.status(400).send(error)
//     }
// }
