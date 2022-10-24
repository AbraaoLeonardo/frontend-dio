const gas_price = 5.79;
const gas_by_km = 12;
const km_total = 1580;
let price_total = km_total/gas_by_km*gas_price;;
console.log("Gasto total e de: R$"+price_total.toFixed(2));