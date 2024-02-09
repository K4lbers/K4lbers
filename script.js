var largura = 0
var altura = 0
var vidas = 1
var tempo = 30
var level = 1500

var escolha = window.location.search
escolha = escolha.replace('?', '')
if (escolha==='normal') {
    level = 1500
} else if (escolha==='dificil'){
    level = 1000
} else if(escolha==='chucknorris'){
    level=750
}

function startGame(){
    var nivel = document.getElementById('dificuldade').value
    if (nivel === ''){
        alert('Selecione uma nível para começar a jogar')
        return false
    } 
        window.location.href = 'game.html?' + nivel
    }



document.getElementById('segundos').innerHTML = tempo

//1º capturar as dimensões da janela(window)
//2º usar as dimensões para sortear uma posição aleatória
//3º inserir imagem na posição aleatória e remover (caso haja)




function capturaTela(){
    //captura as dimensões Altura/Largura de forma dinâmica
    largura = window.innerWidth
    altura = window.innerHeight
    
    console.log(largura,altura)
}

var cronometro = setInterval(function(){
    
    if(tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href= 'vitoria.html'
    } else {
        
        tempo -=1
        document.getElementById('segundos').innerHTML = tempo
}}, 1000)


function posicaoRandom(){
  //Remover elemento mosquito (caso tenha)  
    document.getElementById('mosquito')
        if (document.getElementById('mosquito')){
            //remove o mosquisto
            document.getElementById('mosquito').remove()

            //remove as vidas
            if (vidas > 3){
                window.location.href = 'gameOver.html'
            }
            document.getElementById('v' + vidas).src = ("imagens/coracao_vazio.png")
            vidas++
        }

    //Valor aleatório entre Altura e Largura
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
   
    //Se a posição for negativa, atribua o valor 0
    //A fim de não cortar o elemento inserido no body
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    console.log(posicaoX, posicaoY)


    // Criar elemento de forma programática
   var mosca = document.createElement('img')
   mosca.src = "imagens/mosca.png"
   mosca.className = imagemRandom() + ' ' + ladoRandom()
   mosca.style.left = posicaoX + 'px'
   mosca.style.top = posicaoY + 'px'
   mosca.style.position = 'absolute'
   mosca.id = 'mosquito'
   mosca.onclick = function (){
    this.remove()
   }

   document.body.appendChild(mosca)
   
}
capturaTela()
posicaoRandom()

function imagemRandom(){
    var classe = Math.floor(Math.random() * 3)
    //console.log(classe)

    switch (classe) {
        case 0:
        return 'mosquito1'
        case 1:
        return 'mosquito2'
        case 2:
        return 'mosquito3'
    }
}

function ladoRandom() {
    var lado = Math.floor(Math.random() * 2)
    console.log(lado)

    switch (lado) {
        case 0:
        return 'ladoA'
        case 1:
        return 'ladoB'

    }
}



    var criaMosca = setInterval(function(){
        posicaoRandom()
        }, level)


