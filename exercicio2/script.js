let idade = Number(prompt('Qual a sua idade'));

if(idade >=18){
    alert('Maior de Idade')
        isEnsinoMedio = confirm('Voce terminou o ensino medio?');
    if(isEnsinoMedio && idade >= 18){
    alert('Ensino Medio OK!')
        isCursandoOutraFaculdade = confirm('Voce esta cursando uma faculdade?');
    }else{
        alert('Temine o Ensino medio!')
    }
    if(isCursandoOutraFaculdade){
        alert('Voce esta no caminho certo!')
    }else{
        alert('Entre para uma facudade! (ou nao)')
    }
}else{
    alert('Menor de idade')
}
