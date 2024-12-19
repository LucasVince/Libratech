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
    }, 
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genero: {
        type: DataTypes.ENUM('romance', 'ficção', 'fantasia', 'suspense', 'terror', 'aventura', 'historia', 'drama', 'terror'),
        allowNull: false,
    }
}, {
    tableName: 'livros',
    timestamps: false,
});

module.exports = livroModel;