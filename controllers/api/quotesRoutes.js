const router = require('express').Router();
const { Quotes } = require('../../models');

// quotes routes code here

// get quotes pulls all the quotes from the quotes database
router.get('/', async (req, res) => {
    try {
        const quotes = await Quotes.findAll();
        res.status(200).json(quotes);
    } catch(err) {
        res.status(500).json(err);
    }
});

// get:id pulls specific quote from quotes database
router.get('/:id', async (req, res) => {
    try {
        const quotes = await Quotes.findByPk(req.params.id);
        
        if (!quotes) {
            res.status(500).json({message: 'No quotes found with that id!'});
            return;
        }
        res.status(200).json(quotes);
    } catch(err){
        res.status(500).json(err);
    }
});

// post uploads a new quote into the quotes database
router.post('/', async (req, res) => {
    try  {
        const quotes = await Quotes.create({
            quote: req.body.quote,
        });
        res.json(quotes);
    } catch(err) {
        res.status(502).json(err);
    }
});

//  put updates a quote in the quotes database
router.put('/:id',  async (req, res)  =>  {
    try {
        const quotes = await Quotes.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (quotes) {
            res.json(quotes);
        } else {
            res.status(404).json({ error: "No quotes with this ID "})
        }
    } catch(err) {
        res.status(503).json(err);
    }
});

// delete removes a quote from the database
router.delete('/:id',  async (req, res) =>  {
    try {
        const quotes = await Quotes.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!quotes) {
            res.status(404).json({ message: 'No category found with that id!' });
            return;
        }
        
        res.status(200).json(quotes);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
