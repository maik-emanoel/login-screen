const allButtons = document.querySelectorAll('button')
const emailInput = document.querySelector('#email')
const formBtn = document.querySelector('.btn')
const invalidEmailmessage = document.querySelector('p.invalid-email')
const passwordInput = document.querySelector('#password')
const showHidePasswordBtn = document.querySelector('.showHidePasswordBtn')
const passwordImage = showHidePasswordBtn.querySelector('img')

allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
    })
})

emailInput.addEventListener('blur', () => {
    const emailValue = emailInput.value
    const isValid = validEmail(emailValue)

    if (!isValid) {
        invalidEmailmessage.style.display = 'initial'
        emailInput.classList.add('invalid-email')
        formBtn.setAttribute('disabled', true)
    } else {
        invalidEmailmessage.style.display = 'none'
        emailInput.classList.remove('invalid-email')
        if(passwordInput.value.length >= 8) {
            formBtn.removeAttribute('disabled')
        }
    }

    if(emailInput.value == '') {
        invalidEmailmessage.style.display = 'none'
        emailInput.classList.remove('invalid-email')
    }
})

emailInput.addEventListener('input', () => {
    if(emailInput.value == '') {
        invalidEmailmessage.style.display = 'none'
        emailInput.classList.remove('invalid-email')
    }
})

function validEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}

const urlImagesWithAlt = [
    {
        urlEyeOff: './assets/eye-off.svg',
        altEyeOff: 'Ícone de olho fechado que indica que a senha está oculta'
    },
    {
        urlEye: './assets/eye-on.svg',
        altEye: 'Ícone de olho aberto que indica que a senha está visível'
    }
]

showHidePasswordBtn.addEventListener('click', showOrHidePassword)
function showOrHidePassword() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        passwordImage.src = urlImagesWithAlt[1].urlEye
        passwordImage.alt = urlImagesWithAlt[1].altEye
    } else {
        passwordInput.type = 'password'
        passwordImage.src = urlImagesWithAlt[0].urlEyeOff
        passwordImage.alt = urlImagesWithAlt[0].altEyeOff
    }
}

passwordInput.addEventListener('input', () => {
    const passwordValue = passwordInput.value.length
    const isValidPassword = passwordValue >= 8 && passwordValue <= 12
  
    if (!validEmail(emailInput.value) || !isValidPassword) {
      formBtn.setAttribute('disabled', true)
    } else {
      formBtn.removeAttribute('disabled')
    }
})

