const price = 150;
const option = 4;
let discount;

if(option==1)
    discount = 0.9;
else if(option == 2)
    discount = 0.85;
else if(option == 3)
    discount = 1;
else
    discount = 1.1;

const pay = price*discount;
console.log("The total to pay is: R$"+pay);