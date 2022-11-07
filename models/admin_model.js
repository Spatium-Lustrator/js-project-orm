const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const admin = sequelize.define("admins", {
    login: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },


}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = admin