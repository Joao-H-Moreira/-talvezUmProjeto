const aluno = document.getElementById("alunos");
const turma = document.getElementById("turmas");
const atividade = document.getElementById("atividades");
const disciplina = document.getElementById("disciplinas");

aluno.addEventListener('click', alunoLarge)
turma.addEventListener('click', turmaLarge)
atividade.addEventListener('click', atividadeLarge)
disciplina.addEventListener('click', disciplinaLarge)

function aluno1() {
    aluno.innerHTML = `<div class="nome">
            <p>Alunos</p>
        </div>
        <div class="inputs-1">
            <label for="nome">Nome</label>
            <input type="text" id="nome" placeholder="Nome" required="required">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" placeholder="Ex: 999.999.999-99" required="required">
        </div>
        <div class="inputs-2">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" required="required">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" class="input-padrao" required placeholder="(xx) xxxxx-xxxx" required="required">
        </div>
        <div class="select-turma">
            <label for="turma">Turma</label>
            <select name="turma" id="turma">
                <option value=""></option>
                <option value="">DEV-2</option>
                <option value="">Logística</option>
            </select>
        <button>Confirmar</button>
        </div>`;
    aluno.style.left = "50%";
    aluno.style.top = "50%";
    aluno.style.backgroundImage = "url('img/fundoLogin.jpg')";
    aluno.style.backgroundSize = "cover";
    aluno.style.width = "30vw";
    aluno.style.height = "45vh";
    aluno.style.transition = ".5s";
    aluno.style.border=".3vw solid #D9D9D9"
    turma.style.left = "25%";
    turma.style.top = "75%";
    turma.style.transition = ".5s";
    atividade.style.left = "50%";
    atividade.style.top = "85%";
    atividade.style.transition = ".5s";
    disciplina.style.left = "75%";
    disciplina.style.top = "75%";
    disciplina.style.transition = ".5s";
    aluno.removeEventListener('click',alunoLarge)
}

function aluno2() {
    aluno.innerHTML = `<p>Alunos</p>`;
    aluno.style.width = "10vw";
    aluno.style.height = "20vh";
    aluno.style.backgroundImage = "none";
    aluno.style.border=".3vw solid #B50709"
    aluno.addEventListener('click', alunoLarge)
    
}

function alunoLarge (event){
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT' && event.target.tagName !== 'BUTTON') {
        aluno1();
        turma2();
        atividade2();
        disciplina2();
    }
}

    // (event) => {
    // // Garante que apenas cliques fora dos inputs ou selects disparem a função
    // if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT' && event.target.tagName !== 'BUTTON') {
    //     aluno1();
    //     turma2();
    //     atividade2();
    //     disciplina2();
    // }
// });

// Adiciona ouvintes diretamente


function turma1() {
    turma.innerHTML = `<div class="nome">
                            <p>Turmas</p>
                        </div>
                        <div class="inputs">
                            <input type="text" placeholder="Usuário">
                            <input type="password" placeholder="Senha">
                            <input type="email" placeholder="E-mail">
                        </div>`;
    turma.style.left = "50%";
    turma.style.top = "50%";
    turma.style.backgroundImage = "url('img/fundoLogin.jpg')";
    turma.style.backgroundSize = "cover";
    turma.style.width = "30vw";
    turma.style.height = "45vh";
    turma.style.transition = ".5s";
    turma.style.border=".3vw solid #D9D9D9";
    aluno.style.left = "25%";
    aluno.style.top = "75%";
    aluno.style.transition = ".5s";
    atividade.style.left = "50%";
    atividade.style.top = "85%";
    atividade.style.transition = ".5s";
    disciplina.style.left = "75%";
    disciplina.style.top = "75%";
    disciplina.style.transition = ".5s";
    turma.removeEventListener('click',turmaLarge)
}

function turma2() {
    turma.innerHTML = `<p>Turmas</p>`;
    turma.style.width = "10vw";
    turma.style.height = "20vh";
    turma.style.backgroundImage = "none";
    turma.style.border=".3vw solid #B50709"
    turma.addEventListener('click',turmaLarge)
}

function turmaLarge (event){
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT' && event.target.tagName !== 'BUTTON') {
        turma1();
        aluno2();
        atividade2();
        disciplina2();
    }
}

// turma.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'INPUT') {
//         turma1();
//         aluno2();
//         atividade2();
//         disciplina2();
//     }
// });

function atividade1() {
    atividade.innerHTML = `<div class="nome">
                            <p>Atividades</p>
                        </div>
                        <div class="inputs">
                            <input type="text" placeholder="Usuário">
                            <input type="password" placeholder="Senha">
                            <input type="email" placeholder="E-mail">
                        </div>`;
    atividade.style.left = "50%";
    atividade.style.top = "50%";
    atividade.style.backgroundImage = "url('img/fundoLogin.jpg')";
    atividade.style.backgroundSize = "cover";
    atividade.style.width = "30vw";
    atividade.style.height = "45vh";
    atividade.style.transition = ".5s";
    atividade.style.border=".3vw solid #D9D9D9";
    aluno.style.left = "25%";
    aluno.style.top = "75%";
    aluno.style.transition = ".5s";
    turma.style.left = "75%";
    turma.style.top = "75%";
    turma.style.transition = ".5s";
    disciplina.style.left = "50%";
    disciplina.style.top = "85%";
    disciplina.style.transition = ".5s";
    atividade.removeEventListener('click',atividadeLarge)
}

function atividade2() {
    atividade.innerHTML = `<p>Atividades</p>`;
    atividade.style.width = "10vw";
    atividade.style.height = "20vh";
    atividade.style.backgroundImage = "none";
    atividade.style.border=".3vw solid #B50709";
    atividade.addEventListener('click',atividadeLarge)
}

function atividadeLarge (event){
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT' && event.target.tagName !== 'BUTTON') {
        atividade1();
        aluno2();
        turma2();
        disciplina2();
    }
}

// atividade.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'INPUT') {
//         atividade1();
//         aluno2();
//         turma2();
//         disciplina2();
//     }
// });

function disciplina1() {
    disciplina.innerHTML = `<div class="nome">
                                <p>Disciplinas</p>
                            </div>
                            <div class="inputs">
                                <input type="text" placeholder="Usuário">
                                <input type="password" placeholder="Senha">
                                <input type="email" placeholder="E-mail">
                            </div>`;
    disciplina.style.left = "50%";
    disciplina.style.top = "50%";
    disciplina.style.backgroundImage = "url('img/fundoLogin.jpg')";
    disciplina.style.backgroundSize = "cover";
    disciplina.style.width = "30vw";
    disciplina.style.height = "45vh";
    disciplina.style.transition = ".5s";
    disciplina.style.border=".3vw solid #D9D9D9";
    aluno.style.left = "25%";
    aluno.style.top = "75%";
    aluno.style.transition = ".5s";
    turma.style.left = "75%";
    turma.style.top = "75%";
    turma.style.transition = ".5s";
    atividade.style.left = "50%";
    atividade.style.top = "85%";
    atividade.style.transition = ".5s";
    disciplina.removeEventListener('click', disciplinaLarge)
}

function disciplina2() {
    disciplina.innerHTML = `<p>Disciplinas</p>`;
    disciplina.style.width = "10vw";
    disciplina.style.height = "20vh";
    disciplina.style.backgroundImage = "none";
    disciplina.style.border=".3vw solid #B50709";
    disciplina.addEventListener('click',disciplinaLarge)
}

function disciplinaLarge (event){
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'SELECT' && event.target.tagName !== 'BUTTON') {
        disciplina1();
        aluno2();
        turma2();
        atividade2();
    }
}

// disciplina.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'INPUT') {
//         disciplina1();
//         aluno2();
//         turma2();
//         atividade2();
//     }
// });