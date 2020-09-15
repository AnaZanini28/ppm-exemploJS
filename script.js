/*
var boolean = false; 
console.log(typeof(boolean));
console.log(boolean);

numero = 1;
console.log(typeof(numero));
console.log(numero);

numero = Math.PI;
console.log(typeof(numero));
console.log(numero);

var texto = 'texto';
console.log(typeof(texto));
console.log(texto);

var n2 = 10;
var n1 = 20;

console.log('soma',n1+n2);
console.log('subtração',n1-n2);
console.log('divisao',n1/n2);
console.log('multiplicação',n1+n2);

console.log('potencia n1 elevado a n2', Math.pow(2,5));
console.log('raiz quadrada de 25', Math.sqrt(25));

var pi = Math.PI;
var numeroRandomico = Math.random() *100;

console.log('Numero randomico', Math.floor(numeroRandomico));

var texto = 'Texto';

console.log(texto.toLocaleLowerCase);
console.log(texto.toUpperCase);

var texto = '  Texto  ';
console.log(texto.trim);

var texto = 'texto';
console.log(texto.startsWith('tex'));
console.log(texto.endsWith('to'));
console.log(texto.search('x'));
console.log(texto.charAt(0));
console.log(texto[0]);
console.log(texto.concat(' texto2'));

*/


window.alert('Bem vindo a calculadora em JavaScript');

var continuar;

do{
var opcao = parseInt((window.prompt('Digite a operação\n1-Soma\n2-Subtração\n3-Divisão\n4-Multiplicação\n5-Potenciação\n0-Sair\nOpção:')));

if( opcao === 0 ){
    continuar = false;
}else if (opcao >= 1 && opcao <=5){

        var n1 = parseFloat(window.prompt('Digite o primeiro número:'));
        var n2 = parseFloat(window.prompt('Digite o segundo número:'));
        var resultado;
    switch(opcao){
        case 1:
            resultado = n1 + n2;
        break;
        case 2:
            resultado = n1 - n2;
        break;
        case 3:
            resultado = n1 / n2;
        break;
        case 4:
            resultado = n1 * n2;
        break;
        case 5:
            resultado = Math.pow(n1,n2);
        break;
       }

       if(resultado !== undefined) {
           window.alert('Resultado: '+resultado);
       }
       continuar = confirm('Deseja continuar?');
    
     } else{
           alert('Opção inválida');
           continuar = true;
    }
 
}while(continuar);

alert('Fechando ...');

