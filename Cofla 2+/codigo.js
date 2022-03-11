
let free = false;

const validarCliente = (time)=>{
    let edad = prompt( "Cual es tu edad");
    if (edad > 18){
        if (time >=2 && time <7 && free == false) {
            alert ("podes pasar gratis porque sos la primer persona despues de las 2 AM");
            free = true;
        }
        else{
            alert(`son las ${time} :00 HSS ,podes pasar pero tenes que garpar`)
        }
   
    }else {
        alert( "papu sos menor de edad no vas a pasar")
    }

}

validarCliente(23);
validarCliente(24);
validarCliente(0.1);
validarCliente(2);
validarCliente(23);
validarCliente(23);
validarCliente(23);
validarCliente(23);




