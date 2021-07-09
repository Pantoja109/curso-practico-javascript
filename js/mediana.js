
function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado + elementoActual;
        }
    );
    promedioLista = sumaLista / lista.length;    
    return promedioLista;
}

function esPar(num){
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function calcularMediana(lista){
    lista.sort( function (a,b){
        return a-b;
    });
    const mitadLista = parseInt(lista.length / 2);   
    let mediana;

    if (esPar(lista.length)){
        const a = lista[mitadLista];
        const b = lista[mitadLista -1];
        mediana= calcularPromedio([a,b]);
    }
    else{
        mediana = lista[mitadLista];
    }
    return mediana;
}

