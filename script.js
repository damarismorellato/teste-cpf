console.log('JavaScript carregado');

function validaCPF(cpf) {
    console.log(cpf.length)
    if (cpf.length != 11) {
    return false;
    } else {

        var numeros = cpf.substring(0, 9);

        var digitos = cpf.substring(9);
        
        
        var soma = 0;

        for (var i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log (soma);
        return true;
    }
}

//-- mostra que a validação foi iniciada
//-- pega o valor digitado no input e armazena na variavel CPF
//-- armazena o resultado da função validaCPF utilizando o paramentro cpf
function validacao() {
    console.log('validação iniciada');

    var cpf = document.getElementById('cpf_digitado').value;
    var resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao){
        document.getElementById('success').style.display='block';
    }else{
        document.getElementById('error').style.display='block';
    }
}