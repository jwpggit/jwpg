const router = require('express').Router()
const emailRouter = require('./email')

// Posts
router.use('/api/email', emailRouter)

module.exports = router