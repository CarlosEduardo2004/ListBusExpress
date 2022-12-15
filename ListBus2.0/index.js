// arrays
let grupoA = [' - Thayná Sabrina', ' - Joeslyany', ' - Erielson Brito', ' - Lara C.', ' - Ana Aparecida', ' - Ana Cristina', ' - Ana Lívia', ' - Bianca Liane',
' - Andreza', ' - Samara', ' - Maria Clara C', ' - Ana Luiza', ' - Talita', ' - Monicke', ' - Iandra', ' - Karyne', ' - Riversson', ' - Ramylle', ' - Nathaly',
' - Rawany', ' - Joaquim', ' - Karinne', ' - João Fausto', ' - Bianca', ' - Leonardo G', ' - Maria Clara', ' - Bruno Souza', ' - Erika', ' - Maria Analia', ' - Antony', ' - Evilyn', ' - Viviane',
' - Jamille', ' - Maria Luiza', ' - Hiandro', ' - Gizele', ' - Rene Jr', ' - Felipe Gabriel', ' - John', ' - Yasmin R.', ' - Íris', ' - Mariana', ' - Renata' , ' - Joaquim S.'
]
let grupoB = [' - Kadu', ' - Izamara', ' - Jordana', ' - Suzy', ' - Ilana', ' - Jéssica', ' - Jangada', ' - Larissa', ' - Ana Clara', ' - Joan', ' - Gisela', ' - Poly', ' - Jefter',
' - Diana', ' - Cecília', ' - Luiz Fernando', ' - Julio', ' - Kenned', ' - Matheus', ' - Amanda', ' - Carla', ' - Alisson', ' - Jonas Gabriel',
' - Lara Louíza', ' - Ana Beatriz', ' - Samuel Lucas', ' - Giovana', ' - P. Henrique', ' - Gabriel', ' - JV (Info)', ' - João Augusto', ' - JV (Vestu)',
' - Lavínia', ' - Silas', ' - Keven', ' - Jonas', ' - Jamine', ' - Joselany', ' - Yasmin Vitória', ' - Eduarda Martins', ' - Yasmim S.',
' - Jhonnattan', ' - Edjane', ' - Patrick', ' - Alessandro']

let pessoasFaltaramA = []
let pessoasFaltaramB = []

let aux = 1
// colocando o html nos forms

for (i in grupoA) {
    let pessoa = `
        <li class="pessoa">
        <input type="checkbox" class="check-a">
        <p>${aux} ${grupoA[i]}</p>
        </li>
        `;
    document.querySelector('#pessoas-grupo-a').innerHTML += pessoa;
    aux++;
}

let aux2 = 1
// colocando o html nos forms

for (j in grupoB) {
    let pessoa = `
        <li class="pessoa"> 
        <input class="check-b" type="checkbox">
        <p>${aux2} ${grupoB[j]}</p>
        </li>
        `;
    document.querySelector('#pessoas-grupo-b').innerHTML += pessoa;
    aux2++;
}

// retornar quantas pessoas faltaram
let resultadoA = document.querySelector('#text-modal')
let modal = document.querySelector('.modal');

// fechar modal
function fecharModal() {
    modal.style.display = 'none'
    location.reload(true)
}



function enviarA() {
    let noChecked = 0;
    let checkBoxes = document.querySelectorAll(".check-a");

    let numeroPosicaoPessoa = 0;

    checkBoxes.forEach(function (el) {
        if (!el.checked) {
            noChecked++
            pessoasFaltaramA.push(grupoA[numeroPosicaoPessoa]);
        }
        numeroPosicaoPessoa++;
    });


    modal.style.display = 'flex'
    if (noChecked === 0) {
        resultadoA.innerText = 'Ninguém faltou'
    }

    if (noChecked === 1) {
        resultadoA.innerText = 'Faltou ' + noChecked + ' pessoa';
        for (i in pessoasFaltaramA) 
            resultadoA.innerText += pessoasFaltaramA[i]+ '\n';
    }
    else {
        resultadoA.innerText = 'Faltaram ' + noChecked + ' pessoas \n';
        for (i in pessoasFaltaramA) 
            resultadoA.innerText += pessoasFaltaramA[i]+'\n ';
    }
   
}

function enviarB() {
    let noChecked = 0;
    let checkBoxes = document.querySelectorAll(".check-b");

    let numeroPosicaoPessoa = 0;

    checkBoxes.forEach(function (el) {
        if (!el.checked) {
            noChecked++
            pessoasFaltaramB.push(grupoB[numeroPosicaoPessoa]);
        }
        numeroPosicaoPessoa++;
    });


    modal.style.display = 'flex'
    if (noChecked === 0) {
        resultadoA.innerText = 'Ninguém faltou'
    }

    if (noChecked === 1) {
        resultadoA.innerText = 'Faltou ' + noChecked + ' pessoa';
        for (i in pessoasFaltaramB) 
            resultadoA.innerText += pessoasFaltaramB[i]+ '\n';
    }
    else {
        resultadoA.innerText = 'Faltaram ' + noChecked + ' pessoas \n';
        for (i in pessoasFaltaramB) 
            resultadoA.innerText += pessoasFaltaramB[i]+'\n ';
    }
   
}

