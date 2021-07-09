//FIGURAS GEOMÉTRICAS

//Cuadrado

function perimetroCuadrado(lado){
    return lado *4;
}

function areaCuadrado(lado){
    return lado * lado;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const perimetro = perimetroCuadrado(input.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El perimetro del cuadrado es "+ perimetro+ " cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const area = areaCuadrado(input.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El área del cuadrado es: "+ area+ "cm²";
}


//Triangulo

function perimetroTriangulo(lado1, lado2, lado3){
    return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputLadoTriangulo1");
    const lado2 = document.getElementById("inputLadoTriangulo2");
    const base = document.getElementById("inputBaseTriangulo");
    const perimetro = perimetroTriangulo(lado1.value, lado2.value, base.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El perimetro del triangulo es "+ perimetro + " cm";
}

function calcularAreaTriangulo(){
    const base = document.getElementById("inputBaseTriangulo");
    const altura = document.getElementById("inputAlturaTriangulo");
    const area = areaTriangulo(base.value, altura.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El área del triangulo es "+ area + " cm²";
}

//Circulo


function diametroCirculo(radio){
    return radio *2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    const pi = Math.PI;
    return diametro * pi;
}

function areaCirculo(radio){
    const pi = Math.PI;
    return (pi * (radio * radio)) / 2;
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("inputCirculo");
    const perimetro = perimetroCirculo(radio.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El perimetro del círculo es "+ perimetro + " cm";
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculo");
    const area = areaCirculo(radio.value);
    const resultado = document.getElementById("resultadoOperacion");
    resultado.innerText = "El área del círculo es "+ area + " cm²";
}



