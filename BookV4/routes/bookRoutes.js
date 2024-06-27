const express = require('express');
const { initializeBooks, getBooks, createBook, updateBook, deleteBook } = require('../controllers/bookController');

const router = express.Router();

/**
 * @swagger
 * /api/books/initialize:
 *   get:
 *     summary: Initialize books database
 *     responses:
 *       201:
 *         description: Database initialized
 */
router.get('/initialize', initializeBooks);

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Retrieve a list of books
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Create a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created successfully
 */
router.post('/', createBook);

/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Update a book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: Book updated
 */
router.put('/:id', updateBook);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Delete a book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Book deleted
 */
router.delete('/:id', deleteBook);

module.exports = router;
