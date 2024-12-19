CREATE DATABASE libratech;

USE libratech;

CREATE TABLE livros (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    classificacao_indicativa enum('infanto juvenil','ensino medio') NOT NULL,
    autor varchar(50) NOT NULL,
    genero enum('romance', 'ficção', 'fantasia', 'suspense', 'aventura', 'historia', 'drama', 'terror') NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE alunos (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    idade int NOT NULL,
    turma varchar(50) NOT NULL,
    endereco varchar(100) NOT NULL,
    tel varchar(15) NOT NULL,
    PRIMARY KEY(id)
);