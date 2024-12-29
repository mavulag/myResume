// Import required dependency
const express = require('express')

// Import controllers
const {
    createHeader,
    getHeaders,
    getHeaderById,
    updateHeader,
    deleteHeader,
} = require('../controllers/headerController');

// Initilize router
const router = express.Router();

router.post('/', createHeader);
router.get('/', getHeaders);
router.get('/:id', getHeaderById);
router.patch('/:id', updateHeader);
router.delete('/:id', deleteHeader);

module.exports = router;