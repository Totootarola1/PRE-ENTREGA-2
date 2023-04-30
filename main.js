alert("BIENVENIDOS A CARSHOP");
alert("A continuacion vera el stock con el que contamos , por favor seleccione un vehiculo.El precio mostrado sera en dolares , una vez que proceda la compra se pasara a ARS al cambio del dolar BLUE")
dolarBlue = 478;
class autos {
    constructor(numero, nombre, modelo, año, color, km, precio) {
        this.nombre = nombre;
        this.numero = numero;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.km = km;
        this.precio = parseFloat(precio);
    }
    toString() {
        return `Vehiculo N° ${this.numero}\n
            Nombre del vehiculo  ${this.nombre}\n
            Modelo ${this.modelo}\n 
            Año ${this.año}\n 
            Color del vehiculo ${this.color}\n
            kilometraje  ${this.km}\n
            Precio en USD$ ${this.precio}`;
    }
    conversion() {
        this.precio = this.precio * dolarBlue;
    }
}

let coche1 = new autos(1, "BMW", "M7", 2023, "NEGRO MATE", "0KM", 50000)
let coche2 = new autos(2, "AUDI", "TT", 2019, "GRIS", "60.000 KM", 27000)
let coche3 = new autos(3, "VW", "SIROCCO", 2020, "MORADO CHILLON", "30.000KM", 30000)
let coche4 = new autos(4, "AMAROK", "V6", 2023, "BLACK EDITION", "0KM", 10000)

alert(coche1)
alert(coche2)
alert(coche3)
alert(coche4)

allCars = [];

allCars.push(coche1, coche2, coche3, coche4)

let escoger = Number(prompt("Escoga un vehiculo"))

for (const auto of allCars) {
    if (escoger == 1) {
        auto.conversion(coche1);
        alert("Has escogido el BMW M7 por un total de $" + auto.precio + " ARS")
        alert("Su compra ha sido exitosa,Vuelva pronto!")
        break;
    }
    else if (escoger == 2) {
        auto.conversion(coche2)
        alert("Has escogido el AUDI TT GRIS por un total de $" + auto.precio + " ARS")
        alert("Su compra ha sido exitosa,Vuelva pronto!")
        break;
    }
    else if (escoger == 3) {
        auto.conversion(coche3)
        alert("Has escogido el VW SIROCCO MORADO CHILLON por un total $" + auto.precio + " ARS")
        alert("Su compra ha sido exitosa,Vuelva pronto!")
        break;
    }
    else if (escoger == 4) {
        auto.conversion(coche4)
        alert("Has escogido la AMAROK V6 BLACK EDITION por un total $" + auto.precio + " ARS")
    } else if (escoger>4){
        alert("No ha seleccionado ningun coche , esperamos que vuelva pronto!")
        break;
        
    }
}




