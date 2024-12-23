const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const app = express();
const port = 3000;

const dbConfig = {
    user: 'appUser',
    password: '1',
    server: '127.0.0.1',
    database: 'sistemaEscolar',
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'


//CADASTRO
app.post('/adicionar-professor', async (req, res) => {
    const { nome, senha, email } = req.body;  
    try {
        await sql.connect(dbConfig);
        const query = `
            INSERT INTO dimProfessores (nomeProfessor, Senha, emailProfessor)
            VALUES (@nome, @senha, @email)
        `;
        const request = new sql.Request();
        request.input('nome', sql.NVarChar, nome);
        request.input('senha', sql.NVarChar, senha); 
        request.input('email', sql.NVarChar, email); 
        await request.query(query);
        res.send('Usuário adicionado com sucesso!'); 
    } catch (error) {
        res.status(500).send('Erro ao adicionar usuário: ' + error.message);
    }
});


// Alunos
app.post('/adicionar-aluno', async (req, res) => {
    const {nomeAluno, cpfAluno, telefoneAluno, turmaID, emailAluno, foto } = req.body;

    try {
        await sql.connect(dbConfig);
        const query = `
            INSERT INTO dimAlunos (nomeAluno, cpfAluno, telefoneAluno, turmaID, emailAluno, foto)
            VALUES ( @nomeAluno, @cpfAluno, @telefoneAluno, @turmaID, @emailAluno, @foto)
        `;
        const request = new sql.Request();
        request.input('nomeAluno', sql.NVarChar, nomeAluno);
        request.input('cpfAluno', sql.NVarChar, cpfAluno);
        request.input('telefoneAluno', sql.NVarChar, telefoneAluno);
        request.input('turmaID', sql.Int, turmaID);
        request.input('emailAluno', sql.NVarChar, emailAluno);
        request.input('foto', sql.VarBinary, foto);
        await request.query(query);

        res.send('Produto adicionado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao adicionar produto: ' + error.message);
    }
});

// Turmas
app.post('/adicionar-turma', async (req, res) => {
    const {nomeTurma, periodo} = req.body;
    const dataInicio = new Date()

    try {
        await sql.connect(dbConfig);
        const query = `
            INSERT INTO dimTurmas (nomeTurma, periodo, dataInicio)
            VALUES ( @nomeTurma, @periodo, @dataInicio)
        `;
        const request = new sql.Request();
        request.input('nomeTurma', sql.NVarChar, nomeTurma);
        request.input('periodo', sql.NVarChar, periodo);
        request.input('dataInicio', sql.Date, dataInicio);
        await request.query(query);

        res.send('Produto adicionado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao adicionar produto: ' + error.message);
    }
});

//Matérias
app.post('/adicionar-materia', async (req, res) => {
    const {nomeMateria} = req.body;

    try {
        await sql.connect(dbConfig);
        const query = `
            INSERT INTO dimMaterias (nomeMateria)
            VALUES ( @nomeMateria)
        `;
        const request = new sql.Request();
        request.input('nomeMateria', sql.NVarChar, nomeMateria);
        await request.query(query);

        res.send('Produto adicionado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao adicionar produto: ' + error.message);
    }
});

//Atividades
app.post('/adicionar-atividade', async (req, res) => {
    const {nomeAtividade, materiaID, semestre, descricao} = req.body;

    try {
        await sql.connect(dbConfig);
        const query = `
            INSERT INTO dimAtividades (nomeAtividade, materiaID, semestre, descricao)
            VALUES ( @nomeAtividade, @materiaID, @semestre, @descricao)
        `;
        const request = new sql.Request();
        request.input('nomeAtividade', sql.NVarChar, nomeAtividade);
        request.input('materiaID', sql.Int, materiaID);
        request.input('semestre', sql.Int, semestre);
        request.input('descricao', sql.NVarChar, descricao);
        await request.query(query);

        res.send('Produto adicionado com sucesso!');
    } catch (error) {
        res.status(500).send('Erro ao adicionar produto: ' + error.message);
    }
});

//TESTE
app.get('/carregarTurmas', async (req, res) => {
    try {
        // Conectar ao banco
        await sql.connect(dbConfig);

        const query = `SELECT turmaID, nomeTurma FROM dimTurmas`;

        const result = await new sql.Request().query(query);

        // Retornar as turmas como JSON
        res.json(result.recordset);

    } catch (err) {
        console.error('Erro ao conectar ou buscar dados:', err);
        res.status(500).send('Erro ao buscar turmas');
    } finally {
        sql.close();
    }
});

//TESTE
app.get('/carregarMaterias', async (req, res) => {
    try {
        // Conectar ao banco
        await sql.connect(dbConfig);

        const query = `SELECT materiaID, nomeMateria FROM dimMaterias`;

        const result = await new sql.Request().query(query);

        // Retornar as turmas como JSON
        res.json(result.recordset);

    } catch (err) {
        console.error('Erro ao conectar ou buscar dados:', err);
        res.status(500).send('Erro ao buscar matérias');
    } finally {
        sql.close();
    }
});

app.get('/carregarAtividades', async (req, res) => {
    try {
        // Conectar ao banco
        await sql.connect(dbConfig);

        const query = `SELECT atividadeID, nomeAtividade FROM dimAtividades`;

        const result = await new sql.Request().query(query);

        // Retornar as turmas como JSON
        res.json(result.recordset);

    } catch (err) {
        console.error('Erro ao conectar ou buscar dados:', err);
        res.status(500).send('Erro ao buscar matérias');
    } finally {
        sql.close();
    }
});

app.post('/associarMateriaTurmas', async (req, res) => {
    const { materiaID, turmaIDs } = req.body;

    if (!materiaID || !Array.isArray(turmaIDs) || turmaIDs.length === 0) {
        return res.status(400).send('Dados inválidos.');
    }

    try {
        await sql.connect(dbConfig);

        for (const turmaID of turmaIDs) {
            const request = new sql.Request(); // Cria uma nova instância para cada iteração
            request.input('materiaID', sql.Int, materiaID);
            request.input('turmaID', sql.Int, turmaID);

            const query = `
                INSERT INTO materiasTurmas (materiaID, turmaID)
                VALUES (@materiaID, @turmaID)
            `;
            await request.query(query);
        }

        res.send('Matéria associada às turmas selecionadas com sucesso!');
    } catch (error) {
        console.error('Erro ao associar matéria às turmas:', error);
        res.status(500).send('Erro ao associar matéria às turmas.');
    } finally {
        sql.close();
    }
});

app.post('/associarAtividadeTurmas', async (req, res) => {
    const { atividadeID, turmaIDs } = req.body;

    if (!atividadeID || !Array.isArray(turmaIDs) || turmaIDs.length === 0) {
        return res.status(400).send('Dados inválidos.');
    }

    try {
        await sql.connect(dbConfig);

        for (const turmaID of turmaIDs) {
            const request = new sql.Request(); // Cria uma nova instância para cada iteração
            request.input('atividadeID', sql.Int, atividadeID);
            request.input('turmaID', sql.Int, turmaID);

            const query = `
                INSERT INTO atividadesTurmas (atividadeID, turmaID)
                VALUES (@atividadeID, @turmaID)
            `;
            await request.query(query);
        }

        res.send('Matéria associada às turmas selecionadas com sucesso!');
    } catch (error) {
        console.error('Erro ao associar matéria às turmas:', error);
        res.status(500).send('Erro ao associar matéria às turmas.');
    } finally {
        sql.close();
    }
});

// Rota para obter os alunos de uma turma
app.get("/alunos", async (req, res) => {
    const turmaID = parseInt(req.query.turmaID, 10);

    // Verifica se o ID da turma é válido
    if (!turmaID || turmaID <= 0) {
        return res.status(400).json({ error: "ID da turma inválido" });
    }

    try {
        // Conecta ao banco de dados
        const pool = await sql.connect(dbConfig);

        // Consulta para obter os alunos da turma
        const result = await pool.request()
            .input('turmaID', sql.Int, turmaID) // Substitui o `?` pelo parâmetro
            .query('SELECT alunoID, nomeAluno FROM dimAlunos WHERE turmaID = @turmaID');

        // Retorna os alunos ou um array vazio
        res.json(result.recordset); // `recordset` contém as linhas retornadas
    } catch (err) {
        console.error("Erro ao consultar o banco de dados:", err);
        res.status(500).json({ error: "Erro no servidor" });
    }
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});