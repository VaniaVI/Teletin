document.addEventListener("DOMContentLoaded", () => {
    const sendChatBtn = document.getElementById("send-btn");
    const chatInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const chatbotToggler = document.querySelector(".chatbot-toggler");
    const chatbot = document.querySelector(".chatbot");

    // Alternar la visibilidad del chatbot
    chatbotToggler.addEventListener("click", () => {
        document.body.classList.toggle("show-chatbot");
    });

    sendChatBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });

    function sendMessage() {
        const userInput = chatInput.value.trim();

        if (!userInput) {
            return;
        }

        // Mostrar el mensaje del usuario
        const userMessage = document.createElement('li');
        userMessage.className = 'chat outgoing';
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBox.appendChild(userMessage);

        // Limpiar el campo de entrada
        chatInput.value = '';

        // Enviar el mensaje a la API Task de Automation Anywhere
        fetch('http://your-automation-anywhere-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: userInput }),
        })
        .then(response => response.json())
        .then(data => {
            const botMessage = document.createElement('li');
            botMessage.className = 'chat incoming';
            botMessage.innerHTML = `<span class="material-icons">smart_toy</span><p>${data.response}</p>`;
            chatBox.appendChild(botMessage);

            // Desplazarse hacia abajo automáticamente al recibir un nuevo mensaje
            chatBox.scrollTop = chatBox.scrollHeight;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});
