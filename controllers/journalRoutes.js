const router = require('express').Router();

router.get('/journal', async (req, res) => {
    try {
      res.render('journal', {
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});



router.get('/journal/user', async (req, res) => {
  try{
   res.render("user_journals", {
    logged_in: true
   })
} catch(err) {
    res.status(500).json(err);
}
});


module.exports = router;