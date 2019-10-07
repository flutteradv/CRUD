const express = require('express')
const postController = require('../controller/post_controller')
const productController = require('../controller/product_controller')
const router = express.Router()

router.get('/',postController.showIndex)
router.post('/add-post',postController.addPost)
router.get('/posts',postController.showPosts)
router.get('/posts/:id',postController.showSinglePost)
router.patch('/update-post',postController.updatePost)
router.delete('/delete-post/:name',postController.deletePost)

// Quench Api
router.get('/shop',productController.showProducts)
router.post('/add-product',productController.addProduct)

module.exports = router