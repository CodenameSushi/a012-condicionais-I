let idade = Number(prompt('Qual a sua idade'));
let isEnsinoMedio = confirm('Voce terminou o ensino medio?');
let isCursandoOutraFaculdade = confirm('Voce esta cursando uma faculdade?');

if(idade >= 18){
    alert('Maior de idade')
}else{
	alert('Menor de Idade')
};

if(isEnsinoMedio === true){
    alert('Esta pessoa terminou o Ensino Medio')
}else{
    alert('Essa pessoa nao terminou o Ensino Medio')
};

if(isCursandoOutraFaculdade === true){
    alert('Essa pessoa esta cursando Faculdade')
}else{
    alert('Essa pessoa nao esta cursando faculdade')
};