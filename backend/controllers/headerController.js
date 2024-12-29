// Import Header from models
const Header = require('../models/Header');

// Create a new header
exports.createHeader = async (req, res) => {
    try {
        const header = await Header.create(req.body);
        res.status(201).json(header);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
};

// Get all headers
exports.getHeaders = async (req, res) => {
    try {
        const headers = await Header.find();
        res.status(200).json(headers);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
};

// Get a single header by ID
exports.getHeaderById = async (req, res) => {
    try {
        const header = await Header.findById(req.params.id);
        if (!header) {
            return res.status(404).json({error: 'Header not found'});
        };
        res.status(200).json(header);
    } catch (error) {
        res.status(400).json({error: err.message});
    }
};

// Update a header
exports.updateHeader = async (req, res) => {
    try {
        const header = await Header.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!header) {
            return res.status(404).json({error: 'Header not found'});
        };
        res.status(200).json(header);
    } catch (error) {
        res.status(400).json({error: err.message})
    }
};

// Delete a header
exports.deleteHeader = async (req, res) => {
    try {
        const header = await Header.findByIdAndDelete(req.params.id);
        if (!header) {
            return res.status(404).json({error: 'Header not found'});
        };
        res.status(200).json({ message: 'Header deleted successfully'});
    } catch (error) {
        res.status(400).json({error: err.message});
    }
}