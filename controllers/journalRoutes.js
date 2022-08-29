const router = require('express').Router();

router.get('/journals', async (req, res) => {
    try {
      // Pass serialized data and session flag into template
      res.render('journal');
    } catch (err) {
      res.status(500).json(err);
    }
});



router.get('/journals/user', async (req, res) => {
  try{
   res.render("user_journals")
} catch(err) {
    res.status(500).json(err);
}
});


module.exports = router;