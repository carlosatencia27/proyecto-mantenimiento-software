// Servicio de Vehículos
// Toda la lógica relacionada con vehículos está aquí

const vehiculosService = {
    
    lista: [],
    
    registrar: function(placa, modelo, marca, anio) {
        // Validar campos
        let error = validarCampoVacio(placa, "placa");
        if (error) {
            alert(error);
            return null;
        }
        
        error = validarLongitudMinima(placa, 6, "placa");
        if (error) {
            alert(error);
            return null;
        }
        
        // Verificar si ya existe
        if (buscarDuplicado(this.lista, "placa", placa)) {
            alert("Ya existe un vehículo con esa placa");
            return null;
        }
        
        // Crear el vehículo
        const vehiculo = {
            placa: placa,
            modelo: modelo,
            marca: marca,
            anio: anio,
            kilometraje: 0,
            activo: true,
            fechaRegistro: new Date()
        };
        
        // Guardarlo
        this.lista.push(vehiculo);
        this.guardarEnStorage();
        
        return vehiculo;
    },
    
    buscar: function(placa) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].placa === placa) {
                return this.lista[i];
            }
        }
        return null;
    },
    
    obtenerTodos: function() {
        return this.lista;
    },
    
    guardarEnStorage: function() {
        localStorage.setItem('vehiculos', JSON.stringify(this.lista));
    },
    
    cargarDeStorage: function() {
        const datos = localStorage.getItem('vehiculos');
        if (datos) {
            this.lista = JSON.parse(datos);
        }
    }
};