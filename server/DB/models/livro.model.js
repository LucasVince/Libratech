const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect.js');

const livroModel = sequelize.define('livro', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    classificacao_indicativa: {
        type: DataTypes.ENUM('infanto juvenil','ensino medio'),
        allowNull: false,
        defaultValue: 'ensino medio',
        field: 'classificacao_indicativa'
    }, 
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.ENUM('romance', 'ficção', 'fantasia', 'suspense', 'terror', 'aventura', 'historia', 'drama'),
        allowNull: false,
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'sinopse não adicionada'
    },
    emprestado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValues: false
    }
}, {
    tableName: 'livros',
    timestamps: false
});

module.exports = livroModel;