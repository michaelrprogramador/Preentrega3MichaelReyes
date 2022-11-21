const servicios = [
    {nombre: "Psicologia", precio: 100},
    {nombre: "Fonoaudiologia", precio: 70},
    {nombre: "Terapia Ocupacional", precio: 70},
    {nombre: "Neuropsicologia", precio: 200},
];

let carrito = []

let seleccion = prompt("Deseas adquirir algun servicio?")

while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingresa si o no")
    seleccion = prompt("Hola desea adquirir algun servicio? si o no")
}

if (seleccion == "si") {
    alert("A continuacion nuestra lista de servicios")
    let todoslosservicios = servicios.map(
        (servicios) => servicios.nombre + " " + servicios.precio + "$"
    );
    alert(todoslosservicios.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por venir, hasta pronto 😊")
}

while (seleccion != "no") {
    let servicio = prompt("Agrega un servicio a tu carrito 🛒")
    let precio = 0

    if (servicio == "Psicologia" || servicio == "Terapia Ocupacional" || servicio == "Fonoaudiologia" || servicio == "Neuropsicologia") {
        switch(servicio) {
            case "Psicologia": precio = 100;
            break;
            case "Terapia Ocupacional": precio = 70;
            break;
            case "Fonoaudiologia": precio = 70;
            break;
            case "Neuropsicologia": precio = 200;
            break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas sesiones desea pagar?"))

    carrito.push({servicio, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese servicio ❌")
    }

    seleccion = prompt("Desea seguir comprando?")
    while(seleccion === "no"){
        alert("Gracias por tu compra, hasta pronto 😊❤️")
        carrito.forEach((carritofinal) => {
            console.log(`servicio: ${carritofinal.servicio}, unidades: ${carritofinal.unidades}, total a pagar por servicio ${carritofinal.unidades * carritofinal.precio}`)
        })
        break
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
alert(`El total a pagar por su compra es: ${total} 💵`)
