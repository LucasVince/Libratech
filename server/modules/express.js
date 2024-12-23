const express = require('express');
const app = express();

const alunoModel = require('../DB/models/aluno.model.js');
const livroModel = require('../DB/models/livro.model.js');

const { Op } = require('sequelize');

const cors = require('cors');
const { sequelize } = require('../DB/connect.js');

app.use(cors());
app.use(express.json());

app.get('/alunos', async (req, res) => {
    const { search } = req.query;

    try {
        if (search) {
            const alunos = await alunoModel.findAll({
                where: {
                    [Op.or]: [
                        {id: search},
                        {nome: {[Op.like]: `%${search}%`}},
                        {turma: {[Op.like]: `%${search}%`}}
                    ]
                }
            });

            return res.status(200).json({ alunos: alunos });
        }

        const alunos = await alunoModel.findAll();
        return res.status(200).json({ alunos: alunos });
    } catch (err) {
        console.error('Erro no servidor:', err);
        return res.status(500).json({ error: err.message });
    }
});

app.post('/alunos', async (req, res) => {
    const {nome, idade, turma, endereco, numeroResponsaveis} = req.body;

    try {
        if (!nome || !idade || !turma || !endereco || !numeroResponsaveis) {
            return res.status(400).json({message: 'Informações faltando'});
        }

        const aluno = await alunoModel.create({ nome, idade, turma, endereco, tel: numeroResponsaveis });

        return res.status(201).json({message: 'aluno cadastrado com sucesso', aluno: aluno});
    } catch (err) {
        return res.status(500).json( {message: err.message} );
    }
});

app.put('/alunos', async (req, res) => {
    const { aluno, livro } = req.body;

    try {
        if (!aluno || !livro) {
            return res.status(404).json({message: 'selecione um aluno ou livro para poder continuar'});
        }

        const livroEmprestado = await livroModel.findOne({
            where: {id: livro}
        });

        if (livroEmprestado.emprestado) {
            return res.status(400).json({message: 'selecione outro livro, pois o livro selecionado ja foi emprestado'});
        }

        const emprestimo = await alunoModel.update(
            {livro_ID: livro},
            {where: {id: aluno} },
        );

        return res.status(200).json({ message: 'emprestimo feito com sucesso', livro: livroEmprestado, aluno: emprestimo });
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
});

app.get('/livros', async (req, res) => {
    const { livro_ID, search } = req.query;

    try {
        
        if (livro_ID) {
            const livro = await livroModel.findOne({
                where: {id: livro_ID}
            });
            
            return res.status(200).json({livro});
        }

        if (search) {
            const livros = await livroModel.findAll({
                where: {
                    [Op.or]: [
                        {id: search},
                        {nome: {[Op.like]: `%${search}%`}},
                        {autor: {[Op.like]: `%${search}%`}}
                    ]
                }
            });

            return res.status(200).json({livros: livros});
        }

        const livros = await livroModel.findAll();
        return res.status(200).json({livros: livros});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
});

app.post('/livros', async(req, res) => {
    const {nome, autor, classificacao, genero, sinopse, emprestado} = req.body;

    try{
        if (!nome || !autor || !classificacao || !genero) {
            return res.status(400).json({message: 'Informações faltando'});
        }

        const livro = await livroModel.create({nome, autor, classificacao_indicativa: classificacao, genero, sinopse, emprestado})
        
        return res.status(201).json({message: 'livro cadastrado com sucesso!',livro: livro})
    }catch(err){
        return res.status(500).json({message: err.message})   
    }
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});