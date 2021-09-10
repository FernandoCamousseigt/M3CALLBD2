import { capturarDatosUsuariosPosteos } from "./datos";

const mostrarDatosDOM = () => {
    const cuerpo = document.body;
    const entradaID = document.createElement('input');
    entradaID.setAttribute('type','text');
    const botonSolicitud = document.createElement('button');
    botonSolicitud.textContent = 'Presioname';
    botonSolicitud.addEventListener('click', async() => {
        const datos = await capturarDatosUsuariosPosteos(parseInt(entradaID.value));
        console.log(datos[0].name);
        datos[1].forEach(posteo => {
            console.log(posteo.title);
        });
    });
    cuerpo.appendChild(entradaID);
    cuerpo.appendChild(botonSolicitud);
}
mostrarDatosDOM();