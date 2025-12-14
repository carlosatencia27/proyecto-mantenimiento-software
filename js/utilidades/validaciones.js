// ============================================
// VALIDACIONES DEL SISTEMA
// ============================================
// Aquí están todas las funciones que validan
// si los datos que ingresa el usuario son correctos

// Verifica que un campo no esté vacío
// Por ejemplo: que el nombre no esté en blanco
function validarCampoVacio(valor, nombreCampo) {
    if (!valor || valor.trim() === "") {
        return `El campo ${nombreCampo} es obligatorio`;
    }
    return null; // Si está bien, devuelve null
}

// Verifica que un texto tenga el largo mínimo
// Por ejemplo: que la placa tenga al menos 6 caracteres
function validarLongitudMinima(valor, minimo, nombreCampo) {
    if (valor.length < minimo) {
        return `El ${nombreCampo} debe tener al menos ${minimo} caracteres`;
    }
    return null;
}

// Busca si ya existe un dato repetido en la lista
// Por ejemplo: si ya hay un vehículo con esa placa
function buscarDuplicado(lista, campo, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][campo] === valor) {
            return true; // Sí existe
        }
    }
    return false; // No existe
}