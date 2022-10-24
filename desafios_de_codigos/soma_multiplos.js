var a = parseInt(gets());
var N = parseInt(gets());
 
//TODO:  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".
let sum = 0;
for(let i=a;i<=N;i = i+a){
  sum = sum + i;  
  
}
print(sum)