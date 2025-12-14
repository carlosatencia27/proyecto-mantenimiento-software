// Sistema LogiFleet - Gestión de Flotas
console.log("Sistema LogiFleet iniciado");

let vehiculos = [];
let conductores = [];
let alertas = [];

// ==========================================
// FUNCIONES DE VEHÍCULOS
// ==========================================

function registrarVehiculo(placa, modelo, marca, anio) {
    // Validar placa
    if (!placa || placa.trim() === "") {
        alert("Error: La placa es obligatoria");
        return null;
    }
    
    // Validar que la placa tenga formato correcto
    if (placa.length < 6) {
        alert("Error: La placa debe tener al menos 6 caracteres");
        return null;
    }
    
    // Verificar si ya existe
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placa) {
            alert("Error: Ya existe un vehículo con esa placa");
            return null;
        }
    }
    
    // Validar modelo
    if (!modelo || modelo.trim() === "") {
        alert("Error: El modelo es obligatorio");
        return null;
    }
    
    // Validar marca
    if (!marca || marca.trim() === "") {
        alert("Error: La marca es obligatoria");
        return null;
    }
    
    // Crear vehículo
    const vehiculo = {
        placa: placa,
        modelo: modelo,
        marca: marca,
        anio: anio,
        kilometraje: 0,
        activo: true,
        fechaRegistro: new Date()
    };
    
    // Guardar en el array
    vehiculos.push(vehiculo);
    
    // Guardar en localStorage
    localStorage.setItem('vehiculos', JSON.stringify(vehiculos));
    
    // Mostrar mensaje
    alert("Vehículo registrado exitosamente");
    
    // Actualizar la lista en pantalla
    actualizarListaVehiculos();
    
    console.log("Vehículo registrado:", vehiculo);
    return vehiculo;
}

function obtenerVehiculos() {
    return vehiculos;
}

function buscarVehiculo(placa) {
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placa) {
            return vehiculos[i];
        }
    }
    return null;
}

// ==========================================
// FUNCIONES DE CONDUCTORES
// ==========================================

function registrarConductor(cedula, nombre, licencia) {
    // Validar cédula
    if (!cedula || cedula.trim() === "") {
        alert("Error: La cédula es obligatoria");
        return null;
    }
    
    // Verificar si ya existe
    for (let i = 0; i < conductores.length; i++) {
        if (conductores[i].cedula === cedula) {
            alert("Error: Ya existe un conductor con esa cédula");
            return null;
        }
    }
    
    // Validar nombre
    if (!nombre || nombre.trim() === "") {
        alert("Error: El nombre es obligatorio");
        return null;
    }
    
    // Validar licencia
    if (!licencia || licencia.trim() === "") {
        alert("Error: La licencia es obligatoria");
        return null;
    }
    
    // Crear conductor
    const conductor = {
        cedula: cedula,
        nombre: nombre,
        licencia: licencia,
        vehiculoAsignado: null,
        activo: true
    };
    
    conductores.push(conductor);
    localStorage.setItem('conductores', JSON.stringify(conductores));
    alert("Conductor registrado exitosamente");
    console.log("Conductor registrado:", conductor);
    return conductor;
}

function asignarConductor(cedulaConductor, placaVehiculo) {
    // Buscar conductor
    let conductor = null;
    for (let i = 0; i < conductores.length; i++) {
        if (conductores[i].cedula === cedulaConductor) {
            conductor = conductores[i];
            break;
        }
    }
    
    if (!conductor) {
        alert("Error: Conductor no encontrado");
        return false;
    }
    
    // Buscar vehículo
    let vehiculo = null;
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placaVehiculo) {
            vehiculo = vehiculos[i];
            break;
        }
    }
    
    if (!vehiculo) {
        alert("Error: Vehículo no encontrado");
        return false;
    }
    
    // Verificar que el conductor no tenga otro vehículo
    if (conductor.vehiculoAsignado) {
        alert("Error: El conductor ya tiene un vehículo asignado");
        return false;
    }
    
    // Asignar
    conductor.vehiculoAsignado = placaVehiculo;
    localStorage.setItem('conductores', JSON.stringify(conductores));
    alert("Conductor asignado exitosamente");
    return true;
}

// ==========================================
// FUNCIONES DE ALERTAS
// ==========================================

function verificarMantenimiento(placa) {
    // Buscar vehículo
    let vehiculo = null;
    for (let i = 0; i < vehiculos.length; i++) {
        if (vehiculos[i].placa === placa) {
            vehiculo = vehiculos[i];
            break;
        }
    }
    
    if (!vehiculo) {
        return null;
    }
    
    // Verificar kilometraje
    if (vehiculo.kilometraje >= 5000) {
        const alerta = {
            tipo: "mantenimiento",
            placa: placa,
            mensaje: "El vehículo necesita mantenimiento",
            fecha: new Date()
        };
        alertas.push(alerta);
        alert("ALERTA: El vehículo " + placa + " necesita mantenimiento");
        return alerta;
    }
    
    return null;
}

// ==========================================
// FUNCIONES DE INTERFAZ
// ==========================================

function actualizarListaVehiculos() {
    console.log("Actualizando lista de vehículos...");
    // Aquí iría el código para actualizar la tabla HTML
}

// Cargar datos al iniciar
function cargarDatos() {
    const vehiculosGuardados = localStorage.getItem('vehiculos');
    if (vehiculosGuardados) {
        vehiculos = JSON.parse(vehiculosGuardados);
    }
    
    const conductoresGuardados = localStorage.getItem('conductores');
    if (conductoresGuardados) {
        conductores = JSON.parse(conductoresGuardados);
    }
}

cargarDatos();
console.log("Funciones básicas cargadas correctamente");
