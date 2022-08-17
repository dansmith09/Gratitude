const router = require('express').Router();
const userRoutes = require('./userRoutes');
const journalRoutes = require('./journalRoutes');
const quotesRoutes = require('./quotesRoutes');

router.use('/users', userRoutes);
router.use('/journal', journalRoutes);
router.use('/quotes', quotesRoutes);

module.exports = router;
