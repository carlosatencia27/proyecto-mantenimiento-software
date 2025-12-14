// Módulo de Validaciones
// Aquí están todas las validaciones que se usan en el sistema

function validarCampoVacio(valor, nombreCampo) {
    if (!valor || valor.trim() === "") {
        return `El campo ${nombreCampo} es obligatorio`;
    }
    return null; // null significa que está bien
}

function validarLongitudMinima(valor, minimo, nombreCampo) {
    if (valor.length < minimo) {
        return `El ${nombreCampo} debe tener al menos ${minimo} caracteres`;
    }
    return null;
}

function buscarDuplicado(lista, campo, valor) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i][campo] === valor) {
            return true; // Sí existe
        }
    }
    return false; // No existe
}
