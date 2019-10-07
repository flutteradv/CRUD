const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const productSchema = new Schema(
    {
        'product-id' : {
            type: Number,
            required: true,
            unique: true   
        },
        name: {
            type: String,
            required: true,
            unique: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        },
        type: {
            type: String,
        },
        subCategory: {
            type: String,
        },
        volume: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
            required: true
        },
    }
)
productSchema.path('name').index({ unique: true });
productSchema.path('product-id').index({ unique: true });

module.exports = mongoose.model('products',productSchema)