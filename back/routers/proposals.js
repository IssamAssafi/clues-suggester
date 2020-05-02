const express = require('express');
const router = express.Router();
const Proposal = require('./../models/proposal');




//Get all proposals
router.get('/admin', async (req, res) => {
    try {
        const proposals = await Proposal.find();
        res.json(proposals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Get all proposals of an author
router.get('/:author', async (req, res) => {
    try {
        const proposals = await Proposal.find({ author: req.params.author.toLowerCase() });
        res.json(proposals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Add new proposal
router.post('/', async (req, res) => {
    const proposal = new Proposal({
        character: req.body.character,
        anime: req.body.anime,
        category: req.body.category,
        clues: req.body.clues,
        author: req.body.author.toLowerCase(),
        status: req.body.status
    })

    try {
        const newProposal = await proposal.save();
        res.status(201).json(newProposal);
    } catch (error) {
        res.status(400).json({ message: err.message });
    }
});

//Update proposal
router.patch('/:id', async (req, res) => {
    Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, proposal) => {
            if (err) return res.status(500).send(err);
            return res.send(proposal);
        }
    )
});

//Delete proposal
router.delete('/:id', async (req, res) => {
    try {
        await Proposal.findByIdAndDelete(req.params.id);
        console.log("success");
        res.status(201).end();
    } catch (e) {
        print(e);
    }

})




module.exports = router;
