console.log('JavaScript carregado');

function validaCPF(cpf){
    return false;
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