import { register } from "../service/user.js"

//obtener la referencia de los elementos
const form = document.getElementById("form")
const userInput = document.getElementById("user")
const lastnameInput = document.getElementById("lastname")
const emailInput = document.getElementById("email")
const passwordInput = document.getElementById("password")
const _passwordInput = document.getElementById("_password")

//TOAST
const _successToast = document.getElementById('successToast')
const _errorToast = document.getElementById('errorToast')

//Agregar un evento al formulario
form.addEventListener('submit',async (e)=>{
   //Prevenir submit por defecto
    e.preventDefault()

    const successToast = bootstrap.Toast.getOrCreateInstance(_successToast)
    const errorToast = bootstrap.Toast.getOrCreateInstance(_errorToast)

    //Obtener valores ingresados
    const username = userInput.value
    const lastname = lastnameInput.value
    const email = emailInput.value
    const password = passwordInput.value
    const _password = _passwordInput.value

    //validaciones
    if (username === '' || lastname === '' || email === '' || password === '' || _password === '') {
        errorToast.show()
        return
    }

    //validacion contrasela
    if (password !== _password) {
        errorToast.show()
    }

    //Si es valido, enviar peticion al backend
    const res =  await register({username,lastname,email,password,_password})

    if (res.id) {
        successToast.show()
    }else{
        errorToast.show()
    }
})
