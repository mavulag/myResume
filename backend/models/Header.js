// Import required dependency
const mongoose = require('mongoose');

// Social Media Schema
const SocialMediaSchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String, required: true},
});

// Title Schema
const TitleSchema = new mongoose.Schema({
    title: {type: String, required: true},
})

// Header Schema
const HeaderSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    titles: {type: [TitleSchema], required: true},
    socialMediaLinks: {type: [SocialMediaSchema], required: true},
});

module.exports = mongoose.model('Header', HeaderSchema);