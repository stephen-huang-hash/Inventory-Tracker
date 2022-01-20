const Item = require('./Item')
const Warehouse = require('./Warehouse')

Item.belongsTo(Warehouse);
Warehouse.hasMany(Item);

module.exports = {
  Item,
  Warehouse
}
