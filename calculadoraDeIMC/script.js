function result() {
    var nome = document.getElementById('nome').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var IMC = (peso / (altura * altura)).toFixed(1);
    if ((nome!='')&&(peso!='')&&(altura !='')) {
        if (IMC < 18.5) {
            resultadoIMC.textContent = `${nome} você esta abaixo do peso ideal, seu imc é: ${IMC}`
        } else if (IMC < 25) {
            resultadoIMC.textContent = `${nome} você esta no peso ideal, seu imc é: ${IMC}`
        } else if (IMC < 30) {
            resultadoIMC.textContent = `${nome} você esta com sobre peso, e seu imc é: ${IMC}`
        } else  if(IMC < 35){
            resultadoIMC.textContent = `${nome} você esta com obesidade 1° grau, e seu imc é: ${IMC}`
        } else if (IMC < 40){
            resultadoIMC.textContent = `${nome} você esta com obesidade 2° grau, e seu imc é: ${IMC}`
        }else{
            resultadoIMC.textContent = `${nome} você esta com obesidade 3° grau, e seu imc é: ${IMC}`
        }
       /*  resultadoIMC.textContent = `${nome} seu imc é: ${IMC}` */
    } else {
        resultadoIMC.textContent ='preencha todos os campos'
    }
    
}