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
            allowNull: false
        },
        turma: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bloqueado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        devendo_livro: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        livro_ID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'livro',
                key: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }
    }, {
    tableName: 'alunos',
    timestamps: false
});

module.exports = alunoModel;