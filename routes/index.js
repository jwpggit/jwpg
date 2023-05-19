const router = require('express').Router()
const emailRouter = require('./email')

// Posts
router.use('/email', emailRouter)

module.exports = router