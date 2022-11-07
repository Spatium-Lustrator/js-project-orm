const Sequelize  = require('sequelize');

const db = new Sequelize({
    database:'db',
    username:'postgres_toma',
    password:'123',
    host: '192.168.0.18',
    dialect: 'postgres',
    port: '5432',
});

module.exports = db;