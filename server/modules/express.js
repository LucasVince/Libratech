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
    const {name} = req.body;

    try {
        if (!name) {
            return res.status(400).json({message: 'Invalid username'});
        }

        const alunos = await alunoModel.create({ name });

        return res.status(201).json({message: 'user added successfully', alunos: alunos});
    } catch (err) {
        return res.status(500).json( {message: err.message} );
    }
});
app.listen(8080, () => {
    console.log('listening on port 8080');
});