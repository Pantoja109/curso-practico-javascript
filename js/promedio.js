const lista = [
    100,
    200,
    300,
    500,
];

function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoActual) {
            return valorAcumulado + elementoActual;
        }
    );
    promedioLista = sumaLista / lista.length;    
    return promedioLista;
}

