const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }
    }
)
postSchema.path('title').index({ unique: true });

module.exports = mongoose.model('posts',postSchema)