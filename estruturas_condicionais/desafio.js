const gas_by_km = 12;
const km_total = 120;
const type_comb = 'gas';
let comb = 0;

if(type_comb == 'etanol')
    comb = 8;
else if(type_comb == 'gas')
    comb = 12;
else
    console.log("Valor invalido");


let price_total = km_total/gas_by_km*comb;
console.log("Gasto total e de: R$"+price_total.toFixed(2));