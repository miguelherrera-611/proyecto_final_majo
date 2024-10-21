document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const publicaciones = document.getElementById('publicaciones');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear una nueva publicación
        const nuevaPublicacion = document.createElement('div');
        nuevaPublicacion.classList.add('publicacion');
        nuevaPublicacion.innerHTML = `
            <h3>${nombre}</h3>
            <p>${mensaje}</p>
        `;

        // Agregar la nueva publicación al foro
        publicaciones.appendChild(nuevaPublicacion);

        // Limpiar el formulario
        postForm.reset();

        
    });
});
