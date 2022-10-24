const nota1 = 1;
const nota2 = 700;
const nota3 = 4;
const media = (nota1+nota2+nota3)/3;
if(media < 5 && media >=0)
    console.log("Reprovado")
else if(media<=7)
    console.log("Recuperacao")
else if(media<=10)
    console.log("Aprovado")
else
    console.log("Notas invalidas")