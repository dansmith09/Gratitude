const router = require('express').Router();
const seedDatabase = require('../seeds/seed');

router.get('/', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});

router.get('/seed', (req, res) => {
  seedDatabase();
  res.status(200);
})

module.exports = router;