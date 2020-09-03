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
for(c in casinhas){
    let casa = casinhas[c]
    casa.addEventListener('click', (event) => {
        trocaJog(vez)
        desenhaJog(casa)
        ven = vencedor()
        if(ven === 'velha'){
            pVenc.innerHTML = ven
            estadoJogo = estados.fim
            estadosDoJogo()
        }else if(ven && ven != 'velha'){
            pVenc.innerHTML = ven
            estadoJogo = estados.fim
            estadosDoJogo()
        }
    })
}
function resetJog(){
    for(c in casinhas){
        let casa = casinhas[c]
        casa.innerHTML = " "
        casa.style.backgroundColor="#ffffff00";
    }
}
function estadosDoJogo(){
    if(estadoJogo == estados.jogar){
        botEstads.style.visibility = 'hidden'
        jogo.style.visibility = 'visible'
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
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[1].style.backgroundColor='#0F0';
        casinhas[2].style.backgroundColor='#0F0';

        return casinhas[0].innerHTML;

    } else if((casinhas[3].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[5].innerHTML) && casinhas[3].innerHTML!=' ' ) {
        casinhas[3].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[5].style.backgroundColor='#0F0';

        return casinhas[3].innerHTML;

    } else if((casinhas[6].innerHTML==casinhas[7].innerHTML) && (casinhas[7].innerHTML==casinhas[8].innerHTML) && casinhas[6].innerHTML!=' ' ) {
        casinhas[6].style.backgroundColor='#0F0';
        casinhas[7].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';

        return casinhas[6].innerHTML;

    } else if((casinhas[0].innerHTML==casinhas[3].innerHTML) && (casinhas[3].innerHTML==casinhas[6].innerHTML) && casinhas[0].innerHTML!=' ' ) {
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[3].style.backgroundColor='#0F0';
        casinhas[6].style.backgroundColor='#0F0';

        return casinhas[0].innerHTML;

    } else if((casinhas[1].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[7].innerHTML) && casinhas[1].innerHTML!=' ' ) {
        casinhas[1].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[7].style.backgroundColor='#0F0';

        return casinhas[1].innerHTML;

    } else if((casinhas[2].innerHTML==casinhas[5].innerHTML) && (casinhas[5].innerHTML==casinhas[8].innerHTML) && casinhas[2].innerHTML!=' ' ) {
        casinhas[2].style.backgroundColor='#0F0';
        casinhas[5].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';

        return casinhas[2].innerHTML;
    } else if((casinhas[0].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[8].innerHTML) && casinhas[0].innerHTML!=' ' ) {
        casinhas[0].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[8].style.backgroundColor='#0F0';

        return casinhas[0].innerHTML;

    } else if((casinhas[2].innerHTML==casinhas[4].innerHTML) && (casinhas[4].innerHTML==casinhas[6].innerHTML) && casinhas[2].innerHTML!=' ' ) {
        casinhas[2].style.backgroundColor='#0F0';
        casinhas[4].style.backgroundColor='#0F0';
        casinhas[6].style.backgroundColor='#0F0';

        return casinhas[2].innerHTML;
    } else{
        let cont = 0
        for(c in casinhas){
            let casa = casinhas[c]
            if(casa.innerHTML === " "){
                cont = 1
            }
        }
        if(cont == 0){
            return 'velha'
        }
    }
    return false
}