const router = require('express').Router()
const {Warehouse} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const warehouses = await Warehouse.findAll()
    res.json(warehouses);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {name, location} = req.body;
    await Warehouse.create({
      name, location
    })
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

module.exports = router

