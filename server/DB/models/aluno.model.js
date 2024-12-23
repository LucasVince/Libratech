const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect.js');

const alunoModel = sequelize.define('aluno', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    turma: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    livro_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'livro',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
    }, {
    tableName: 'alunos',
    timestamps: false
});

module.exports = alunoModel;