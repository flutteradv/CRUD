const express = require('express')
const postController = require('../controller/post_controller')
const router = express.Router()

router.get('/',postController.showIndex)
router.post('/add-post',postController.addPost)

module.exports = router