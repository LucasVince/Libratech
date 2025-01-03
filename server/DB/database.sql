CREATE DATABASE libratech;

USE libratech;

CREATE TABLE livros (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(50) NOT NULL,
    autor varchar(50) NOT NULL,
    classificacao_indicativa enum('infanto juvenil','ensino medio') NOT NULL default 'ensino medio',
    genero enum('romance', 'ficcao', 'fantasia', 'suspense', 'aventura', 'historia', 'drama', 'terror') NOT NULL,
    sinopse varchar(1000) not null default 'sinopse não adicionada',
    emprestado boolean NOT NULL default false,
    PRIMARY KEY(id)
);

CREATE TABLE alunos (
    id int NOT NULL AUTO_INCREMENT,
    nome varchar(100) NOT NULL,
    idade int NOT NULL,
    turma varchar(50) NOT NULL,
    endereco varchar(100) NOT NULL,
    tel varchar(15) NOT NULL,
    bloqueado boolean NOT NULL default false,
    livro_ID int,
    PRIMARY KEY(id),
    constraint fk_emprestimo_livro foreign key(livro_ID) references livros(id) on delete set null on update cascade
);

CREATE TABLE atrasos (
	id int NOT NULL AUTO_INCREMENT,
	aluno_ID int,
    PRIMARY KEY(id),
    constraint fk_aluno_atrasado foreign key(aluno_ID) references alunos(id) on delete set null on update cascade
);