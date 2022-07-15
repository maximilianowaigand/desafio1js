let edad = parseInt(prompt ("ingrese su edad"))
console.log (edad)

if (edad < 18) {
    alert ("sos menor de edad");
}
else if (edad === 18) {
    alert ("tenes la edad justa")
}

else if (edad > 19) {
    alert ("sos mayor de edad")
}
else {
    alert ("ingresa datos")
}


let entrada = prompt ("ingrese modelo del auto");

while (entrada != "salir") {
    switch (entrada) {
        case "206":
            alert ("es un modelo de peugeot");
        break;
        case "207":
            alert ("es un modelo de peugeot");
        break;

        default:
            alert ("no es un modelo valido");
            break;

    }
}