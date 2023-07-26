//obrter elementos da página
const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const smpar = document.querySelector("#outPares");
const smimpar = document.querySelector("#outImpares")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //obter número informado
    const numero = Number(frm.inNumero.value);

    let resposta = ""
    let somapares = 0
    let somaimpares= 0
    //criar um laço de repetição de 1 até 10
    for(let i = 1; i<= 10; i++) {
        resposta += numero + "x" + i + " = " + (numero*i) + "\n";
        //resposta = `${resposta} ${numero} x ${i} = ${numero*i}\n`;
        
        if(numero*i%2==0){// verifca se é par
            somapares = somapares + numero*i;    
        }
        else{ // verifica se é impar
            somaimpares = somaimpares + numero*i;
        }
    }

    //resposta = resposta + `soma dos pares: ${somapares}\n`
    //resposta = resposta + `soma dos impares: ${somaimpares}\n`

    // alterara o conteúdo da tag pre
    resp.innerText = resposta;

    smpar.innerText=somapares;
    smimpar.innerText=somaimpares;
})