const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => { //req syntax required for this to work
    return res.send('Nonexistent route');

});

module.exports = router;