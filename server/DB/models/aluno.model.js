const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect.js');

const alunoModel = sequelize.define('aluno', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classificacao: {
        type: DataTypes.ENUM('infanto juvenil','ensino medio'),
        allowNull: false
    },
    endereço: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
    tableName: 'alunos',
    timestamps: false
});

module.exports = alunoModel;