CREATE DATABASE libratech;

USE libratech;

CREATE TABLE livros (
    id int NOT NULL AUTO_INCREMENT,
    titulo varchar(50) NOT NULL,
    subtitulo varchar(50),
    clasificação_indicativa enum('infanto juvenil','encino medio') NOT NULL,
    autor varchar(50) NOT NULL,
    genero enum('romance', 'ficção'),
    PRIMARY KEY(id)
);

CREATE TABLE alunos (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    claificação enum('infanto juvenil','encino medio') NOT NULL,
    email varchar(75) NOT NULL,
    endereco varchar(100) NOT NULL,
    tel char(11),
    PRIMARY KEY(id)
);