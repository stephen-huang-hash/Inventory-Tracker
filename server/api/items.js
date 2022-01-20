const router = require('express').Router()
const {Item, Warehouse} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.json(items);
  } catch (err) {
    next(err);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const {sku, name, price, quantity, sold} = req.body;
    const [item, created] = await Item.findOrCreate({
      where: {sku},
      defaults: {
        sku, name, price, quantity, sold
      }
    })
    if (!created) {
      await item.update({
        quantity: item.dataValues.quantity + quantity
      })
    }
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const {sku, name, price, quantity, sold, warehouseId} = req.body;
    const item = await Item.findByPk(req.params.id)

    if (warehouseId) {
      const warehouse = await Warehouse.findByPk(warehouseId)
      if (warehouse && (item != null)) {
        await item.update({
          warehouseId
        })
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    } else {
      if (item === null) {
        res.sendStatus(404);
      } else {
        await item.update({
          sku, name, price, quantity, sold
        })
        res.sendStatus(200);
      }
    }
  } catch (err) {
    next(err);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
})

module.exports = router
