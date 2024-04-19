const pessoa = [
    {
    nome:"Emília",
    sexo: "F",
    idade: 59,
    contribuicao:40,
    }
]

if(pessoa[sexo]==="M"){
    if(pessoa[contribuicao]>=35){
        if(pessoa[idade]+pessoa[contribuicao]>95){
        console.log(`${pessoa[nome]}, você pode se aposentar!`)
        }
        else{
        console.log(`${pessoa[nome]}, você ainda não completou o tempo de contribuição!`)
        }
    }
    else{
    console.log(`${pessoa[nome]}, você ainda não completou o tempo de contribuição!`)
    }
}
else{
    if(pessoa[contribuicao]>=30){
        if(pessoa[idade]+pessoa[contribuicao]>85){
        console.log(`${pessoa[nome]}, você pode se aposentar!`)
        }
        else{
        console.log(`${pessoa[nome]}, você ainda não completou o tempo de contribuição!`)
        }
    }
    else{
    console.log(`${pessoa[nome]}, você ainda não completou o tempo de contribuição!`)
    }
}

