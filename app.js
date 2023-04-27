function esAbundante(numero){
    let suma = 0;
    let flag=false;
    for(let i = 1; i < numero; i++){
        if(numero % i == 0){
            suma += i;
        }
    }
    if (numero < suma){
        flag=true;
    }
    return flag;
}

let numero = parseInt(prompt("Ingrese un numero"));

for (let i=0;i<=numero;i++){
     if(esAbundante(i)){
        document.write("<p style='color:green;'>" + i + " es abundante. </p>");
    }
    else {
        document.write("<p style='color:red;'>" + numero+ " no es abundante. </p>");
    }
}
