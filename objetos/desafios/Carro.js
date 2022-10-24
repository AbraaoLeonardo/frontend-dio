class Carro{
    model;
    color;
    gas_by_km;
    price;
    constructor(model, color, gas_by_km){
        this.model = model;
        this.color = color;
        this.gas_by_km = gas_by_km;
    }
    pay_by_km(km, valuer) {
        this.price = km/this.gas_by_km*valuer;
        console.log(this.price);
    }
}
// function pay_by_km(km, valuer, carro) {
//     carro.price = km/carro.gas_by_km*valuer;
//     console.log(carro.price);
// }

const gol = new Carro("gol",'azul',9)
gol.pay_by_km(450,12);