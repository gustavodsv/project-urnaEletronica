const qS = (el)=>document.querySelector(el);

let seuVotoPara = qS('.d-1-1 span')
let cargo = qS('.d-1-2 span')
let numeros = qS('.d-1-3')
let descricao = qS('.d-1-4')
let aviso = qS('.d-2')
let lateral = qS('.d-1-right')

let etapaAtual = 0

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}

function clicou(n) {
    alert("clicou em "+n)
}
function branco() {
    alert("clicou em BRANCO")
}
function corrige() {
    alert("clicou em CORRIGE")
}
function confirma() {
    alert("clicou em CONFIRMA")
}

comecarEtapa()
