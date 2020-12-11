const express = require('express');
const router = express.Router();

//ROUTES
router.get('/', (req, res) => {
   res.send('we are on posts');
});



module.exports = router;