const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect.js');

const alunoModel = sequelize.define('aluno', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'alunos',
    timestamps: false
});

module.exports = alunoModel;