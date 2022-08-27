const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
      console.log(req.session.logged_in);
      if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
      // Pass serialized data and session flag into template
      res.render('homepage');
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
});

router.get('/dashboard', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/journal', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('journal');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;