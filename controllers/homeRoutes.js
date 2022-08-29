const router = require('express').Router();
const { Journal, User } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
    });

    const user = userData.get({ plain: true});

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
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