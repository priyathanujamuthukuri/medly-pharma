const mongoose = require('mongoose');

const itemschema = new mongoose.Schema({
    itemImage:String,    
    description:String,
    itemtype:String,
    price:String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,
})

module.exports =mongoose.model('items',itemschema)
