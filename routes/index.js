const router = require("express").Router();
router.use('/cats', require('./cats.routes'))
module.exports = router;