CREATE DATABASE libratech
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE libratech;

CREATE TABLE livros (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(50) NOT NULL,
    subtitulo varchar(50),
    autor varchar(50) NOT NULL,
    genero enum('romance', 'ficção'),
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;

CREATE TABLE alunos (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    email varchar(75) NOT NULL,
    endereco varchar(100) NOT NULL,
    tel char(11),
    PRIMARY KEY(id)
) DEFAULT CHARSET = utf8;
