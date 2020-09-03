let div = document.getElementById('div2')
let posicoes = document.getElementsByTagName('input')
let jogador = ""
let venc = ""

for (let n=0; n<9; n++){
    let casa = posicoes[n]
    casa.addEventListener('click', (event) => {
        if (casa.value.length == 0){
            let num = casa.id[1]
            trocaJog(jogador, num)
            casa.value = jogador
        }
        let venc = vencedor()

        if (venc != 'noup'){
            div.innerHTML = `Jogador  ${venc} Ganhou`
            //alert(`Jogador  ${venc} Ganhou`)
        }

        
    })
}

function trocaJog(jog, num){
    if (jog.length == "" || jog == 'O'){
        jogador = "X"
        posicoes[num].style.color = '#ff0000'
    } else{
        jogador = "O"
        posicoes[num].style.color = '#0000ff'
    }

}

function vencedor(){
    if((posicoes[0].value==posicoes[1].value) && (posicoes[1].value==posicoes[2].value) && posicoes[0].value!='' ) {
        posicoes[0].style.backgroundColor='#0F0';
        posicoes[1].style.backgroundColor='#0F0';
        posicoes[2].style.backgroundColor='#0F0';

        return posicoes[0].value;

    } else if((posicoes[3].value==posicoes[4].value) && (posicoes[4].value==posicoes[5].value) && posicoes[3].value!='' ) {
        posicoes[3].style.backgroundColor='#0F0';
        posicoes[4].style.backgroundColor='#0F0';
        posicoes[5].style.backgroundColor='#0F0';

        return posicoes[3].value;

    } else if((posicoes[6].value==posicoes[7].value) && (posicoes[7].value==posicoes[8].value) && posicoes[6].value!='' ) {
        posicoes[6].style.backgroundColor='#0F0';
        posicoes[7].style.backgroundColor='#0F0';
        posicoes[8].style.backgroundColor='#0F0';

        return posicoes[6].value;

    } else if((posicoes[0].value==posicoes[3].value) && (posicoes[3].value==posicoes[6].value) && posicoes[0].value!='' ) {
        posicoes[0].style.backgroundColor='#0F0';
        posicoes[3].style.backgroundColor='#0F0';
        posicoes[6].style.backgroundColor='#0F0';

        return posicoes[0].value;

    } else if((posicoes[1].value==posicoes[4].value) && (posicoes[4].value==posicoes[7].value) && posicoes[1].value!='' ) {
        posicoes[1].style.backgroundColor='#0F0';
        posicoes[4].style.backgroundColor='#0F0';
        posicoes[7].style.backgroundColor='#0F0';

        return posicoes[1].value;

    } else if((posicoes[2].value==posicoes[5].value) && (posicoes[5].value==posicoes[8].value) && posicoes[2].value!='' ) {
        posicoes[2].style.backgroundColor='#0F0';
        posicoes[5].style.backgroundColor='#0F0';
        posicoes[8].style.backgroundColor='#0F0';

        return posicoes[2].value;
    } else if((posicoes[0].value==posicoes[4].value) && (posicoes[4].value==posicoes[8].value) && posicoes[0].value!='' ) {
        posicoes[0].style.backgroundColor='#0F0';
        posicoes[4].style.backgroundColor='#0F0';
        posicoes[8].style.backgroundColor='#0F0';

        return posicoes[0].value;

    } else if((posicoes[2].value==posicoes[4].value) && (posicoes[4].value==posicoes[6].value) && posicoes[2].value!='' ) {
        posicoes[2].style.backgroundColor='#0F0';
        posicoes[4].style.backgroundColor='#0F0';
        posicoes[6].style.backgroundColor='#0F0';

        return posicoes[2].value;
    }
    return 'noup'
}

function denovo(){
    for(let n=0; n<9; n++){
        posicoes[n].value = ""
        posicoes[n].style.backgroundColor='#ffffff';
    }
    div.innerHTML = ""
}