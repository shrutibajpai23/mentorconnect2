// Selectors
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Function to send a message
function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for Enter key press
messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendMessage();
    }
});

// Function to select a mentor
function selectMentor(mentorName) {
    // Clear chat box and set a new chat with selected mentor
    chatBox.innerHTML = <div class="message received">You are now chatting with ${mentorName}</div>;
}