const mongoose = require('mongoose');


const BucketListItemSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
const BucketListItem = mongoose.model('BucketListItem', BucketListItemSchema);
module.exports = BucketListItem;