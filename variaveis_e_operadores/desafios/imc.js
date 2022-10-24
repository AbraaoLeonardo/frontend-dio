const hight = 1.80;
const weight = 800;
const imc = weight/(hight*hight);
if(imc >=0 && imc <= 18.5)
    console.log('Abaixo do peso')
else if(imc <=25)
    console.log('Peso normal')
else if(imc <=30)
    console.log('Acima do peso')
else if(imc <=40)
    console.log('Obesidade')
else if(imc >40)
    console.log('Obesidade grave')
else
    console.log('IMC invalido, peso ou altura negativa')