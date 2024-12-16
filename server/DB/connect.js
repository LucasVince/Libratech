const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: `${process.env.DB_DIALECT}`,
    logging: false,
});

connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('connection to database done sucessfully');
    } catch (err) {
        console.error(err);
    }
};

module.exports = { sequelize, connectToDB };