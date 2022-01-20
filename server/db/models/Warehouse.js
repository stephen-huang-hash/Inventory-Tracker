const Sequelize = require('sequelize')
const db = require('../db')

const Warehouse = db.define('warehouse', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Warehouse
