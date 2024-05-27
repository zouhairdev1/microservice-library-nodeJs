const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  publishedDate: { type: Date, required: true },
  pages: { type: Number, required: true },
  genre: { type: String, required: true },
  summary: { type: String }
});

module.exports = mongoose.model('Book', BookSchema);
