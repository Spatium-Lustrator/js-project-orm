const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const user_info = sequelize.define("users_info", {
    user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },

    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    patronymic: {
        type: DataTypes.STRING,
        allowNull: true
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    university : {
        type: DataTypes.STRING,
        allowNull: true
    }



}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = user_info