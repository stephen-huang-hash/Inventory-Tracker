const router = require('express').Router()
module.exports = router

router.use('/items', require('./items'))
router.use('/warehouses', require('./warehouses'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
