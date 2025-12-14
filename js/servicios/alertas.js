// Servicio de Alertas
// Manejo de alertas de mantenimiento

const alertasService = {
    
    lista: [],
    
    verificarMantenimiento: function(placa) {
        const vehiculo = vehiculosService.buscar(placa);
        
        if (!vehiculo) {
            return null;
        }
        
        // Si tiene más de 5000 km, crear alerta
        if (vehiculo.kilometraje >= 5000) {
            const alerta = {
                tipo: "mantenimiento",
                placa: placa,
                mensaje: "El vehículo necesita mantenimiento",
                fecha: new Date()
            };
            
            this.lista.push(alerta);
            return alerta;
        }
        
        return null;
    },
    
    obtenerTodas: function() {
        return this.lista;
    }
};