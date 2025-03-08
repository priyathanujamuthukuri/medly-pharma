const mongoose = require('mongoose');

const carschema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      item_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
      },
      
    });
    


module.exports =mongoose.model('wishlisteditems',carschema)

