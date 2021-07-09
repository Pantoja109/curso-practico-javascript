const lista1 = [
    1,
    2,
    1,
    4,
    5,
    1,
    5,
    4,
    1,
    2,
];

function calcularModa(lista){
    const listaCount = {};
    lista.map(
        function (elemento){
            if (listaCount[elemento]){
                listaCount[elemento]+=1
            }
            else{
                listaCount[elemento]=1;
            }       
        }
    );
    const listaArray = Object.entries(listaCount).sort( 
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1]; 
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return "La moda es: " +moda[0] + " que se repité " + moda[1] + " veces";
} 






