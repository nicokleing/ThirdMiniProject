const mongoose = require('mongoose');
const Book = require('../models/bookModel');
const { fetchBooks } = require('../services/bookService');

const initializeBooks = async (req, res) => {
  const topic = req.query.topic || 'space';
  const books = await fetchBooks(topic);
  await Book.insertMany(books);
  res.status(201).json({ message: 'Database initialized' });
};

const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

const createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { initializeBooks, getBooks, createBook, updateBook, deleteBook };
