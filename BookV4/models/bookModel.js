const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: String,
  birth_year: Number,
  death_year: Number,
});

const bookSchema = new mongoose.Schema({
  id: Number,
  title: String,
  authors: [authorSchema],
  subjects: [String],
  languages: [String],
  media_type: String,
  formats: Object,
  download_count: Number,
});

module.exports = mongoose.model('Book', bookSchema);
