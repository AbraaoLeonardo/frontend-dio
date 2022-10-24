function sayYourName(name){
    console.log("My name is: "+name)
}

function checkAge(age){
    if(age>=18){
        console.log("Can drink beer")
    }
    else{
        console.log("Cant drink beer")
    }
}
function discountCalculate(valuer, option){
    if(option==1)
        discount = 0.9;
    else if(option == 2)
        discount = 0.85;
    else if(option == 3)
        discount = 1;
    else
        discount = 1.1;

    const pay = valuer*discount;
    console.log("The total to pay is: R$ "+pay.toFixed(2));
}

sayYourName('Lucas');
checkAge(15);
discountCalculate(1500,1);
discountCalculate(1500,2);
discountCalculate(1500,3)
discountCalculate(1500,4)