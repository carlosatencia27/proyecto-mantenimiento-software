// Sistema LogiFleet - Gestión de Flotas
console.log("Sistema LogiFleet iniciado");

let vehiculos = [];
let conductores = [];

function registrarVehiculo(placa, modelo, marca) {
    const vehiculo = {
        placa: placa,
        modelo: modelo,
        marca: marca,
        activo: true
    };
    vehiculos.push(vehiculo);
    console.log("Vehículo registrado:", vehiculo);
    return vehiculo;
}

function obtenerVehiculos() {
    return vehiculos;
}

console.log("Funciones básicas cargadas correctamente");