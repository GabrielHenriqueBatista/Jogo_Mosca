var altura = 0 
var largura = 0
var lifes = 1 
var  tmp = 10
var criaMoscaTempo = 1500


var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMoscaTempo = 1500
}else if(nivel === 'dificil'){
    criaMoscaTempo = 1000

}else if(nivel === 'chucknorris' ){
    criaMoscaTempo = 850
}

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustaTamanho()

var cronometro = setInterval(function(){
    tmp -= 1
    if(tmp < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'

    }
    else{
        document.getElementById('cronometro').innerHTML = tmp
    }
},1000)
function posicaoRandomica(){
    //remover o mosquito anterior caso (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(lifes >= 3 ){
            window.location.href = 'gameOver.html'
        }
        else{
            document.getElementById('l' + lifes).src = "imagens/coracao_vazio.png"
            lifes++
        }
    }


    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Criar elemento html
    var  mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() +  ' ' +  ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position =  'absolute'
    
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
           return 'mosca3'
    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2 )
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}
