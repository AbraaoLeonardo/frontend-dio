class Pessoa{
    name;
    weight;
    height;
    constructor(name, weight,height){
        this.name = name;
        this.height = height;
        this.weight = weight
        this.imc = this.weight/(this.height*this.height);
    }
    sayImc(){
        console.log("My imc is "+this.imc.toFixed(2));
    }
    imcClassifie(){
        if(this.imc <=18.5)
            console.log('Abaixo do peso')
        else if(this.imc <=25)
            console.log('Peso normal')
        else if(this.imc <=30)
            console.log('Acima do peso')
        else if(this.imc <=40)
            console.log('Obesidade')
        else if(this.imc >40)
            console.log('Obesidade grave')
        else
            console.log('IMC invalido, peso ou altura negativa')
    }
}

const jose = new Pessoa('jose',70,1.75);
jose.sayImc();
jose.imcClassifie();