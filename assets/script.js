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
        } else
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
    let etapa = etapas[etapaAtual]
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true
        } else {
            return false
        }
    })
    if(candidato.length > 0){
        candidato = candidato[0]
        seuVotoPara.style.display = "block"
        aviso.style.display = "block"
        descricao.innerHTML = `Nome: ${candidato.nome}<br>Partido: ${candidato.partido}`

        let fotosHtml = ''
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="assets/images/${candidato.fotos[i].url}" alt="" srcset="">${candidato.fotos[i].legenda}</div>`
        }

        lateral.innerHTML = fotosHtml
    } else{
        seuVotoPara.style.display = 'block'
        aviso.style.display = 'block'
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }

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
