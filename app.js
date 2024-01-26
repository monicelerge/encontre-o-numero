let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});

}

function exibirMenssagemInicial(){
  exibirTextoNaTela('h1','Encontre o número!');
  exibirTextoNaTela('p','Escolha um número de 1 a 10');

}
exibirMenssagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Você Acertou!');
        let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número correto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p',menssagemTentativas);  
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número correto é menor');   
        }else{
            exibirTextoNaTela('p','O número correto é maior');
        }
        tentativas ++;
        limparCampo();
    }

    console.log(numeroSecreto == numeroSecreto);
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    

}