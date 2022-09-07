let passwordField = document.querySelector('#password')
let passwordRepeat = document.querySelector('#passwordCheck')
let fieldset = document.querySelector('form > fieldset:last-child > div:last-child')

function deleteMessage() {
    if (document.body.contains(document.querySelector('.notMatchingMessage'))) {
        let para = document.querySelector('.notMatchingMessage')
        para.remove()
    }
}

function checkPassword() {
    if (passwordField.value && passwordRepeat.value) {
        if (passwordField.value != passwordRepeat.value) {
            if (!document.body.contains(document.querySelector('.notMatchingMessage'))) {
                let para = document.createElement('p');
                para.textContent = "Passwords don't match"
                para.classList.add('notMatchingMessage')
                fieldset.appendChild(para);
            }
        } else {
            deleteMessage()
        }
    } else {
        deleteMessage()
    }
}

let timeout

passwordRepeat.addEventListener('keyup', () => {
    clearTimeout(timeout)
    timeout = setTimeout(function() {checkPassword()}, 500) 
    deleteMessage()
})