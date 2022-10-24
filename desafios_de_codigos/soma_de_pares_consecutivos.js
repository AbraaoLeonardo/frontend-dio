let x = parseInt(gets());
while (x !== 0)
{
//Condição para caso o número informado for PAR, ele irá somar os 5 pares consecutivos até o seu número.
    if  (x % 2  !== 0)
    {
        x = x+1  ;
    }
//Imprima a soma:
    print(x*5+20);
    x = parseInt(gets());
}