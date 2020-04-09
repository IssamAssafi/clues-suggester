const mongoose = require('mongoose');


const proposalSchema = new mongoose.Schema({
    character: String,
    anime: String,
    category: String,
    clues: [{ text: String, img: String }],
    author: String,
    status: String
});


module.exports = mongoose.model('Proposal', proposalSchema);