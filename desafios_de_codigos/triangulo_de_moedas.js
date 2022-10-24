let N = parseInt(gets());

//TODO: Retorne a altura máxima que o triângulos de moedas terá
let sum = 0;
let i = 0;
while((sum+i)<N){
  i++;
  sum += i;
}

print(i);