const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const journalRoutes = require("./journalRoutes")

router.use('/', homeRoutes);
router.use(journalRoutes)
router.use('/api', apiRoutes);

module.exports = router;
