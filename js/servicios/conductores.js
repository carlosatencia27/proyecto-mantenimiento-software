// Servicio de Conductores
// Lógica de conductores y asignaciones

const conductoresService = {
    
    lista: [],
    
    registrar: function(cedula, nombre, licencia) {
        // Validar
        let error = validarCampoVacio(cedula, "cédula");
        if (error) {
            alert(error);
            return null;
        }
        
        if (buscarDuplicado(this.lista, "cedula", cedula)) {
            alert("Ya existe un conductor con esa cédula");
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
        
        this.lista.push(conductor);
        this.guardarEnStorage();
        return conductor;
    },
    
    asignar: function(cedula, placa) {
        // Buscar conductor
        const conductor = this.buscar(cedula);
        if (!conductor) {
            alert("Conductor no encontrado");
            return false;
        }
        
        // Verificar que no tenga otro vehículo
        if (conductor.vehiculoAsignado) {
            alert("El conductor ya tiene un vehículo asignado");
            return false;
        }
        
        // Asignar
        conductor.vehiculoAsignado = placa;
        this.guardarEnStorage();
        return true;
    },
    
    buscar: function(cedula) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].cedula === cedula) {
                return this.lista[i];
            }
        }
        return null;
    },
    
    guardarEnStorage: function() {
        localStorage.setItem('conductores', JSON.stringify(this.lista));
    },
    
    cargarDeStorage: function() {
        const datos = localStorage.getItem('conductores');
        if (datos) {
            this.lista = JSON.parse(datos);
        }
    }
};