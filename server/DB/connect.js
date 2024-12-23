const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: `${process.env.DB_DIALECT}`,
    logging: false,
});

connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('authetication to database done');

        await sequelize.query('set foreign_key_checks = false');
        await sequelize.sync();
        await sequelize.query('set foreign_key_checks = true');
        console.log('syncronization to database done');
        console.log('database connected successfully');
    } catch (err) {
        console.error(err);
    }
};

module.exports = { sequelize, connectToDB };