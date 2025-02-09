const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
})

const Article = mongoose.model('Article', ArticleSchema)

module.exports = Article;