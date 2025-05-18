document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carousel de Bootstrap
    const bootstrap = window.bootstrap;
    var mainCarousel = new bootstrap.Carousel(document.getElementById('mainCarousel'), {
        interval: 5000,
        wrap: true
    });
    
    // Botón de accesibilidad
    const accessibilityBtn = document.querySelector('.accessibility-button button');
    accessibilityBtn.addEventListener('click', function() {
        document.body.classList.toggle('accessible-mode');
        
        // Funcionalidades para el modo accesible
        if (document.body.classList.contains('accessible-mode')) {
            // Aumentar tamaño de fuente
            document.documentElement.style.fontSize = '120%';
            
            // Aumentar contraste
            document.documentElement.classList.add('high-contrast');
            
            // Notificar al usuario
            const toast = new bootstrap.Toast(createToast('Modo accesible activado'));
            toast.show();
        } else {
            // Restaurar tamaño de fuente
            document.documentElement.style.fontSize = '100%';
            
            // Restaurar contraste
            document.documentElement.classList.remove('high-contrast');
            
            // Notificar al usuario
            const toast = new bootstrap.Toast(createToast('Modo accesible desactivado'));
            toast.show();
        }
    });
    
    // Función para crear un toast de Bootstrap
    function createToast(message) {
        // Crear el contenedor del toast si no existe
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            document.body.appendChild(toastContainer);
        }
        
        // Crear el toast
        const toastEl = document.createElement('div');
        toastEl.className = 'toast';
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        
        toastEl.innerHTML = `
            <div class="toast-header">
                <strong class="me-auto">Teletón</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        `;
        
        toastContainer.appendChild(toastEl);
        return toastEl;
    }
    
    // Agregar clases CSS dinámicas para el modo de alto contraste
    const highContrastStyle = document.createElement('style');
    highContrastStyle.textContent = `
        .high-contrast {
            --teleton-red: #ff0000;
        }
        .high-contrast body {
            background-color: #fff;
            color: #000;
        }
        .high-contrast a {
            color: #0000ff;
        }
        .high-contrast .top-bar,
        .high-contrast .accessibility-button {
            background-color: #ff0000;
        }
        .high-contrast .nav-link {
            color: #000 !important;
        }
        .high-contrast .nav-link:hover,
        .high-contrast .text-teleton {
            color: #ff0000 !important;
        }
    `;
    document.head.appendChild(highContrastStyle);
});