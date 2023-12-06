const router = require("express").Router();

router.use('/users', require('./users.routes'))
router.use('/cats', require('./cats.routes'))
router.use('/events', require('./events.routes'))
router.use('/reports', require('./reports.routes'))


module.exports = router;