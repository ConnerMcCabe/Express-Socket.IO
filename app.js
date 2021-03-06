const socket = io('http://localhost:5000')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')
const messageContainer = document.getElementById('message-container')

const name = prompt('choose a name')

appendMessage(`${name}: connected`)
socket.emit('new-user', name)

socket.on('user-connected', name => { 
    appendMessage(`${name}: connected`)
})

socket.on('user-disconnected', name => { 
    appendMessage(`${name}: disconnected`)
})

socket.on('chat-message', data => { 
    appendMessage(`${data.name}: ${data.message}`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    appendMessage(`${name}: ${message}`)
    socket.emit('send-chat-message', message);
    messageInput.value = '';
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}