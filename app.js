// Sistema LogiFleet - Archivo Principal
console.log("Sistema LogiFleet iniciado");

// Cargar datos al iniciar
function iniciarSistema() {
    vehiculosService.cargarDeStorage();
    conductoresService.cargarDeStorage();
    console.log("Sistema cargado correctamente");
}

// Funciones globales para que el HTML las pueda llamar
function registrarVehiculo(placa, modelo, marca, anio) {
    const resultado = vehiculosService.registrar(placa, modelo, marca, anio);
    if (resultado) {
        alert("Vehículo registrado exitosamente");
    }
    return resultado;
}

function registrarConductor(cedula, nombre, licencia) {
    const resultado = conductoresService.registrar(cedula, nombre, licencia);
    if (resultado) {
        alert("Conductor registrado exitosamente");
    }
    return resultado;
}

function asignarConductor(cedula, placa) {
    const resultado = conductoresService.asignar(cedula, placa);
    if (resultado) {
        alert("Conductor asignado exitosamente");
    }
    return resultado;
}

iniciarSistema();