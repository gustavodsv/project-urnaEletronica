const qS = (el)=>document.querySelector(el);

let seuVotoPara = qS('.d-1-1 span')
let cargo = qS('.d-1-2 span')
let numeros = qS('.d-1-3')
let descricao = qS('.d-1-4')
let aviso = qS('.d-2')
let lateral = qS('.d-1-right')

let etapaAtual = 0
let numero = ''

function comecarEtapa(){
    let etapa = etapas[etapaAtual]

    let numeroHtml = ''

    for(let i=0;i<etapa.numeros;i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>'
        }
        numeroHtml += '<div class="numero"></div>'
    }

    seuVotoPara.style.display = 'none'
    cargo.innerHTML = etapa.titulo
    descricao.innerHTML = ''
    aviso.style.display = 'none'
    lateral.innerHTML = ''
    numeros.innerHTML = numeroHtml
}
function atualizaInterface(){

}

function clicou(n) {
    let elNumero = qS('.numero.pisca')
    if(elNumero !== null){
        elNumero.innerHTML=n
        numero = `${numero}${n}`

        elNumero.classList.remove('pisca')
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca')
        } else {
            atualizaInterface()
        }
    }
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
