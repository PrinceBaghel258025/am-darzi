const router = require('express').Router();
const suitRouter = require('./productRouter')


router.use('/suits', suitRouter)



module.exports = router;