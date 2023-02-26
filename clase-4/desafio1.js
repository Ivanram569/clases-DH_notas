/*const perfil = "administrador"

if (perfil == ""){
    console.log('Debe especificar el perfil del usuario')
} else if (perfil == "administrador"){
    console.log('Usted tiene todos los privilegios de uso del sistema')
} else if (perfil == "asistente"){
    console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos')
} else if (perfil == "invitado"){
    console.log('Usted sólo tiene permisos de consultar datos')
} else{
    console.log('Debe especificar un perfil válido')
}
*/
const perfil = 'ASISTENTE';

switch (perfil){
    case 'ADMINISTRADOR':
    case 'administrador':
    case 'Administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'asistente':
    case 'Asistente':
    case 'ASISTENTE':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'invitado':
    case 'Invitado':
    case 'INVITADO':
        console.log('Usted solo tiene permisos de consultar datos');
        break;
    case '':
        console.log('Debe especificar el perfil del usuario');
        break;
    default:
        console.log('Debe especificar un perfil valido');
}
