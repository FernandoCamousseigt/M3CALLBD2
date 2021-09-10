//Buscar usuario en API
const buscarUsuario = async (user) => {
    const endPointUsuario = `https://api.github.com/users/${user}`;
    try {
        const respuesta = await fetch(endPointUsuario);
        if (respuesta.ok) {
            const usuario = await respuesta.json();
            return usuario;
        }
        throw new Error('el usuario no existe');
    } catch (e) {
        console.log(e);
    }
}
//Repositorios Usuario
const buscarRepoPorUsuario = async (user, pagina, cantidad_repos) => {
    const endPointPosteoUsuario = `https://api.github.com/users/${user}/repos?page=${pagina}&per_page=${cantidad_repos}`;
    const respuesta = await fetch(endPointPosteoUsuario);
    const posteos = await respuesta.json();
    return posteos;
}

export {
    buscarUsuario,
    buscarRepoPorUsuario
    
}