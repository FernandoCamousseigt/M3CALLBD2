import { buscarUsuario, buscarRepoPorUsuario } from './usuario.js';

export const capturarDatosUsuariosPosteos = async(user, pagina, cantidad_repos) => {
    const usuario = buscarUsuario(user);
    const posteos = buscarRepoPorUsuario(user, pagina, cantidad_repos);
    const datos = await Promise.all([usuario, posteos]);
    return datos;
    
}