function ObtenerFecha() {
    const currentDate = new Date();  // Crea una instancia de Date

    let day = currentDate.getDate();  // Día
    let month = currentDate.getMonth() + 1; // Mes (se suma 1 porque los meses empiezan desde 0)
    let year = currentDate.getFullYear();  // Año
    let hours = currentDate.getHours().toString().padStart(2, '0');  // Hora (con formato de 2 dígitos)
    let minutes = currentDate.getMinutes().toString().padStart(2, '0');  // Minutos
    let seconds = currentDate.getSeconds().toString().padStart(2, '0');  // Segundos

    let fecha = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    
    return fecha;  // Devuelve la fecha formateada
}

export default ObtenerFecha;