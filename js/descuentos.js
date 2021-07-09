const coupons = [
    {
        desc: "GIT",
        discount:15,
    },
    {
        desc:"PLATZIRULES",
        discount: 30,
    },
    {
        desc:"DOCKER",
        discount:50,
    },
];


function calcularDescuento(precio, descuento){
    return precio * (1-(descuento/100));
}

function onClickButtonPriceDiscount(){
    //Se obtiene el valor del precio introducido en el formulario.
    const precio = document.getElementById("inputPrecio");
    const precioValue = precio.value;
    //Se obtiene el valor del cupon introducio en el formulario.
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    //Se valida que el cupon ingresado se encuentre en array.
    const isCouponValueValid = function (coupon){
        return coupon.desc === couponValue;
    } ;
    const userCoupon = coupons.find(isCouponValueValid);
    //Si no existe se manda una alerta.
    if(!userCoupon) {
        alert("El cupón " + couponValue + " no es válido");
    //Si existe se hace el calculo del precio con descuento.
    } else {
        const descuento = userCoupon.discount;
        const precioFinal = calcularDescuento(precioValue, descuento);
        const result = document.getElementById("resultadoOperacion");
        result.innerText = "El precio con descuento son: $" +precioFinal;
    }

}
 