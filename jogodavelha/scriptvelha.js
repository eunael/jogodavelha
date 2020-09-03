/*var mjv = [[0,0,0], [0,0,0], [0,0,0]]
/*function a(){
    let p00 = document.getElementById('p00')
    let g = p00.id // a valor do id é string
    console.log(`${g[1]}, ${g[2]}`)
}/
let posicoes = document.getElementsByTagName('input') // vetor de 9 elementos [de 0 a 8] com cada input
for (let a=0; a<10; a++){
    // colocar um .addEventListener para cada input
    if (a==9){
        // esse é o botão p zerar tudo e jogar denovo
        posicoes[a].addEventListener('click', denovo())
    } else{   
        let cadaInp = posicoes[a]
        let cadaInpId = cadaInp.id
        let posi1 = cadaInpId[1]
        let posi2 = cadaInpId[2]
        posicoes[a].addEventListener('click', xo(posi1, posi2))
        console.log(`Evento adicionado no input [${posi1}][${posi2}]`)
        // qnd apertar em tal input, vai chamar função xo e mandar as coordenadas do input apertado
    }
}

// mjv -> Matriz Jogo da Velha
/*for (let l=0; l<3; l++){
    for (let c=0; c<3; c++){
        console.log(mjv[l][c])
    }
}/

/*function jogoComp(){
    let a = 0
    do{
        // sortear as posições do que o computador vai jogar
        let compL = Math.floor(Math.random()*3)
        let compC = Math.floor(Math.random()*3)
        let compPosi = mjv[compL][compC]
        if (compPosi == 0){
            // se for um 0 ele coloca o 'o'
            mjv[compL][compC] = 'o'
            // e a=1 para parar o laço
            a = 1
            // se não, ele repete o laço para sortear outra posição até achar uma com 0
        }
    } while(a != 1)
}
function atualiza(){
    let num = 0
    // isso é para atualizar o jogo
    for (let x=0; x<3; l++){
        for (let c=0; c<3; c++){
            let elem = mjv[l][c]
            if (elem == 0){
                posicoes[num].value = ''
            } else{
                posicoes[num].value = elem
            }
            num++
        }
    }
}/
function xo(p1, p2){
    let linha = Number(p1)
    let colun = Number(p2)
    if (mjv[linha][colun] == 0){
        // vai colocar o 'x' nas coordenadas
        mjv[linha][colun] = 'x'
    } else{
        // se já tiver um 'o' ou 'x' nas coordenadas enviadas, aparece um alert
        alert('Aí não, viu.')
    }
    //jogoComp()
    let a = 0
    do{
        // sortear as posições do que o computador vai jogar
        let compL = Math.floor(Math.random()*3)
        let compC = Math.floor(Math.random()*3)
        let compPosi = mjv[compL][compC]
        if (compPosi == 0){
            // se for um 0 ele coloca o 'o'
            mjv[compL][compC] = 'o'
            // e a=1 para parar o laço
            a = 1
            // se não, ele repete o laço para sortear outra posição até achar uma com 0
        }
    } while(a != 1)

    //atualiza()
    let num = 0
    // isso é para atualizar o jogo
    for (let l=0; l<3; l++){
        for (let c=0; c<3; c++){
            let elem = mjv[l][c]
            if (elem == 0){
                posicoes[num].value = ''
            } else{
                posicoes[num].value = elem
            }
            num++
        }
    }
}

function denovo(){
    for(let x=0; x<10; x++){
        if (x==9){
            continue
        } else{
            posicoes[x].value = ''
        }
    }
}*/
/*let acent = {
    a: ['a','á','à','ã','â'], 
    e: ['e','é','ê'],
    i: ['i','í'],
    o: ['o','ó','õ','ô'],
    u: ['u','ú'],
    c: ['c','ç']
}
if (acent.a.indexOf('â')){
    console.log(acent.a)
}*/