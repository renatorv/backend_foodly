const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({

    title: { type: 'string', required: true },
    value: { type: 'string', required: true },
    imageUrl: { type: 'string', required: true },

});

module.exports = mongoose.model('Category', CategorySchema)