const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    }],

});

module.exports = mongoose.model('Wishlist', WishlistSchema);