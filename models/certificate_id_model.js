const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const certificate_id = sequelize.define("certificate_ids", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = certificate_id