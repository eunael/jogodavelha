let matriz = [[0,0,0], [0,0,0], [0,0,0]]
let div = document.getElementById('div2')
let posicoes = document.getElementsByTagName('input')
let zero, x=0, y=1

function olhaZero(){
    let xis, bolin
    zero = 0
    for(let l=0; l<3; l++){
        for (let c=0; c<3; c++){  
            if(matriz[l][c] == 0){
                zero++
            }
        }
    }
    if (zero<=2){
        return true
    } else{
        return false
    }
}

function jogJogador(posi, num){
    let pos1, pos2, a = posicoes[num]
    pos1 = posi[0]
    pos2 = posi[1]
    div.innerHTML = `Foi o (${pos1}, ${pos2}) apertado. Num (${num})`
    matriz[pos1][pos2] = 'x'
    a.value = 'x'
    x = 1
    y = 0
}
function JogComputador(){
    let parar = 0
    do{
        // sortear as posições do que o computador vai jogar
        let compL, compC, compPosi, soma=0
        compL = Math.floor(Math.random()*3)
        compC = Math.floor(Math.random()*3)
        compPosi = matriz[compL][compC]
        switch(compL){
            case 1:
                soma=2
                break
            case 2:
                soma=4
                break
        }
        if (compPosi == 0){
            // se for um 0 ele coloca o 'o'
            matriz[compL][compC] = 'o'
            let s = compL+compC+soma
            let b = posicoes[s]
            b.value = 'o'
            // e a=1 para parar o laço
            parar = 1
            // se não, ele repete o laço para sortear outra posição até achar uma com 0
        }
    } while(parar != 1)
    x = 0
    y = 1
}

function xo(p, n){
    let retnZ = olhaZero()
    if (retnZ){
        switch(x){
            case 0:
                x = 1
                break
            case 1:
                x = 0
        }
        alert('Deu Velha!')
        denovo()
    } else{
        if (x==0){
            jogJogador(p, n)
            JogComputador()
        } else{
            JogComputador()
        }
        
    }

    
}

function denovo(){
    let limp = 0
    for(let l=0; l<3; l++){
        for (let c=0; c<3; c++){  
            let b = posicoes[limp]
            matriz[l][c] = 0
            b.value = ''
            limp++
        }
    }
}
