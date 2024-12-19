const express = require('express');
const app = express();

const alunoModel = require('../DB/models/aluno.model.js');
const livroModel = require('../DB/models/livro.model.js');

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/alunos', async (req, res) => {
    try {
        const alunos = await alunoModel.findAll();
        return res.status(200).json({ alunos: alunos });
    } catch (err) {
        return res.status(404).json({ error: err.message });
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


app.post('/livros', async(req, res) => {
    const {nome, autor, classificacao, genero} = req.body;

    try{
        if (!nome || !autor || !classificacao || !genero) {
            return res.status(400).json({message: 'Informações estão faltando!'});
        }

        const livro = await livroModel.create({nome, autor, classificacao_indicativa: classificacao, genero})
        
        return res.status(201).json({
            message: 'livro cadastrado com sucesso!',
            livro: livro
        })
    }catch(err){
        return res.status(500).json({message: err.message})   
    }
});

app.listen(8080, () => {
    console.log('listening on port 8080');
});