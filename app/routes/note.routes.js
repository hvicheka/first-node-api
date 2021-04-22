const express = require('express')
const router = express.Router()
const notes = require('../controllers/note.controller.js')

// Create a new Note
router.post('/',notes.create)

// Retrieve all Notes
router.get('/', notes.index)

// Retrieve a single Note with noteId
router.get('/:noteId', notes.show)

// Update a Note with noteId
router.put('/:noteId', notes.update)

// Delete a Note with noteId
router.delete('/:noteId', notes.delete)

module.exports = router