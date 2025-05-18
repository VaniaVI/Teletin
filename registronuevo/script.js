const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const tipoUsuario = document.getElementById('tipoUsuario').value;

        // Validación básica
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        // Objeto con los datos del formulario
        const formData = {
            nombre,
            email,
            password,
            tipoUsuario
        };

        // Aquí normalmente enviarías los datos a tu servidor
        console.log('Datos del formulario:', formData);

        // Simulación de envío exitoso
        alert('Registro exitoso!');
        form.reset();
    });
});