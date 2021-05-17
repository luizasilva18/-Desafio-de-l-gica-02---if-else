let idade = 18
let ishuman = true
let mês = "Janeiro"

if(idade >= 18){
    console.log ("Você é maior que 18 anos")
}

if((ishuman == true) && (idade >= 18)){
    console.log ("As duas afirmativas são verdadeiras")
}
else{
    console.log ("As duas afirmativas são falsas")
}

if((mês === "Dezembro") || (mês === "Janeiro")) {
    console.log ("Você faz aniversario no mês de Dezembro ou de Janeiro")
}

else{
    console.log ("Você não faz aniversario no mês de Dezembro ou de Janeiro")
}