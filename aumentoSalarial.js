/*
1. Crie uma função que pergunte o nome e o salário de umcolaborador;
2. Depois crie uma função que irá calcular o aumento de salário
conforme a seguinte tabela:
ATÉ R$1.500,00 : aumento de 20%
R$1.501,00 até R$2.000,00 : aumento de 15%
R$2.001,00 até R$3.000,00 : aumento de 10%
R$3.001,00 em diante : aumento de 5%
Essa função tem que receber dois parâmetros: o salário e a %
de aumento. E retornar o valor do salário já com o aumento.
3. Depois de calcular o aumento você deve exibir o nome do colaborador, o salário, a % de aumento e o salário reajustado.
4. Crie uma função que pergunte se o usuário deseja calcular
novamente com novas informações.
Para calcular o aumento, faça o valor do salário multiplicado pela
porcentagem em decimal.
Ex.: salário R$1.000,00 aumento de 10%
1000 * 1.10 = 1100
salário R$1.000,00 aumento de 15%
1000 * 1.15 = 1150
*/

var nome = ""
var salario = 0
var aumento = 0

nome = PerguntarNome(nome)
salario = PerguntarSalario(salario)
aumento = aumentoSalarial(salario, nome, aumento)

function PerguntarNome(nome){
    nome =  prompt("Informe o seu nome.")
    return nome
}

function PerguntarSalario(salario){
    salario =  parseInt(prompt("Informe o seu salário."))
    return salario
}

function aumentoSalarial(salario, nome, aumento){
    var porcentagem = 0
    if(salario<1501){
        aumento = (salario / 100) * 120
        porcentagem = 20
    }
    if(salario>1500 && salario<2001){
        aumento = (salario / 100) * 115
        porcentagem = 15
    }
    if(salario>2000 && salario<3001){
        aumento = (salario / 100) * 110
        porcentagem = 10
    }
    if(salario>3000){
        aumento = (salario / 100) * 105
        porcentagem = 5
    }

    alert("Olá " + nome + " seu salário era de " + salario + " ele aumentou " + porcentagem + "%. Ficando assim no valor de: " + aumento + " por mês")
}

