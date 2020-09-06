let vez, jogo, ven, casinhas, estadoJogo, pVenc, botEstads;
let jogador = {
    x: ['x', 'red'],
    o: ['o', 'blue']
}
let estados = {
    jogar: 0,
    jogando: 1,
    fim: 2
}

estadoJogo = estados.jogar
vez = jogador.o
jogo = document.getElementById('jogo')
casinhas = document.getElementsByClassName('casas')
pVenc = document.getElementById('vencedor')
botEstads = document.getElementById('estado')

botEstads.addEventListener('click', estadosDoJogo)
for(let c=0; c<casinhas.length; c++){
    let casa = casinhas[c]
    casa.addEventListener('click', (event) => {
        if(casa.innerHTML === " " && estadoJogo==estados.jogando){
            trocaJog(vez)
            desenhaJog(casa)
        } else{}
        ven = vencedor()
        if(ven === 'velha'){
            mensagemFim(ven, '#0F0')
            estadoJogo = estados.fim
            estadosDoJogo()
        }else if(ven && ven[0] != 'velha'){
            mensagemFim(ven[0], ven[1])
            estadoJogo = estados.fim
            estadosDoJogo()
        }
    })
}
function resetJog(){
    for(let c=0; c<casinhas.length; c++){
        let casa = casinhas[c]
        casa.innerHTML = " "
        casa.style.backgroundColor="#ffffff00";
        pVenc.innerHTML = " "
    }
}
function estadosDoJogo(){
    if(estadoJogo == estados.jogar){
        botEstads.style.visibility = 'hidden'
        estadoJogo = estados.jogando
        resetJog()
    } else if(estadoJogo == estados.fim){
        botEstads.style.visibility = 'visible'
        estadoJogo = estados.jogar
    }
}
function trocaJog(jog){
    if (jog === jogador.x){
        vez = jogador.o
    } else if(jog === jogador.o){
        vez = jogador.x
    }
}
function desenhaJog(ksa){
    ksa.innerHTML = vez[0]
    ksa.style.color = vez[1]
}
function vencedor(){
    if((casinhas[0].innerHTML==casinhas[1].innerHTML) && (casinhas[1].innerHTML==casinhas[2].innerHTML) && casinhas[0].innerHTML!=' ' ) {
        /** LINHA 1 */
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[1].style.backgroundColor='#0F0';
        casinhas[2].style.backgroundColor='#0F0';
        if(casinhas[0].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[3].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[5].innerHTML) && casinhas[3].innerHTML!=' ' ) {
        /** LINHA 2 */
        casinhas[3].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[5].style.backgroundColor='#0F0';
        if(casinhas[3].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[6].innerHTML==casinhas[7].innerHTML) && (casinhas[7].innerHTML==casinhas[8].innerHTML) && casinhas[6].innerHTML!=' ' ) {
        /** LINHA 3 */
        casinhas[6].style.backgroundColor='#0F0';
        casinhas[7].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';
        if(casinhas[6].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[0].innerHTML==casinhas[3].innerHTML) && (casinhas[3].innerHTML==casinhas[6].innerHTML) && casinhas[0].innerHTML!=' ' ) {
        /** COLUNA 1 */
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[3].style.backgroundColor='#0F0';
        casinhas[6].style.backgroundColor='#0F0';
        if(casinhas[0].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[1].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[7].innerHTML) && casinhas[1].innerHTML!=' ' ) {
        /** COLUNA 2 */
        casinhas[1].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[7].style.backgroundColor='#0F0';
        if(casinhas[1].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[2].innerHTML==casinhas[5].innerHTML) && (casinhas[5].innerHTML==casinhas[8].innerHTML) && casinhas[2].innerHTML!=' ' ) {
        /** COLUNA 3 */
        casinhas[2].style.backgroundColor='#0F0';
        casinhas[5].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';
        if(casinhas[2].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }
    } else if((casinhas[0].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[8].innerHTML) && casinhas[0].innerHTML!=' ' ) {
        /** DIAGONAL PRIMÁRIA */
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';
        if(casinhas[0].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else if((casinhas[2].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[6].innerHTML) && casinhas[2].innerHTML!=' ' ) {
        /** DIAGONAL SECUNDÁRIA */
        casinhas[2].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[6].style.backgroundColor='#0F0';
        if(casinhas[2].innerHTML === jogador.x[0]){
            return jogador.x
        } else {
            return jogador.o
        }

    } else{
        /** DEU VELHA */
        let cont = 0
        let ksas = []
        for(let c=0; c<casinhas.length; c++){
            let casa = casinhas[c].innerHTML
            ksas.push(casa)
        }
        if(ksas.every((k, index) => (k!=" "))){
            return 'velha'
        }
    }
    return false
}
function mensagemFim(venc, color){
    if(venc != 'velha'){
        pVenc.innerHTML = `o vencedor é ${venc}!`
    } else {
        pVenc.innerHTML = 'deu velha!'
    }
    pVenc.style.color = color
}