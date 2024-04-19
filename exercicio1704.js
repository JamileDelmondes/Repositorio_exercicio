const nome = "Emília"
const sexo =  "F"
const idade = 40
const contribuicao = 22
    


if(sexo==="M"){
    if(contribuicao>=35){
        if(idade+contribuicao>95){
        console.log(`${nome}, você pode se aposentar!`)
        }
        else{
        console.log(`${nome}, você ainda não completou o tempo de contribuição!`)
        }
    }
    else{
    console.log(`${nome}, você ainda não completou o tempo de contribuição!`)
    }
}
else{
    if(contribuicao>=30){
        if(idade+contribuicao>85){
        console.log(`${nome}, você pode se aposentar!`)
        }
        else{
        console.log(`${nome}, você ainda não completou o tempo de contribuição!`)
        }
    }
    else{
    console.log(`${nome}, você ainda não completou o tempo de contribuição!`)
    }
}

