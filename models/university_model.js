const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const university = sequelize.define("universities", {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false
        }

    }, {
            freezeTableName: true,
            timestamps: false,
        });

module.exports = university