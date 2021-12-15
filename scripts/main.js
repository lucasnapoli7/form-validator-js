// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();

function validator(params) {
    // Esta variable representa si es válido toda la información del formulario 
    let formValido = 0;
    // Nombre
    // Toma el valor del input a través de su ID
    let name = document.getElementById("input-name").value
    // Sacar espacios al input
    name = name.trim()
    if (name.length < 3) {
        error("name")
    } else {
        valido("name")
        formValido++;
    }

    // Mail
    let mail = document.getElementById("input-mail").value
    // Sacar espacios al input y hace todo minusculas
    mail = mail.trim().toLowerCase()
    if (!mail.match(/^[^@]+@[\w\.]{2,10}\.[\w]{2,5}$/i)){
        error("mail")
    } else {
        valido("mail")
        formValido++
    }

    // Contraseña
    let password = document.getElementById("input-password").value
    let password2 = document.getElementById("input-password2").value
    // Chequear si tiene 8 carácteres, una letra mayúscula, una minúscula y un número como mímino
    if (password === '' || password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/)) {
        error("password")
    } else {
        valido("password")
        formValido++;
        if (password !== password2) {
            error("password2")
        } else {
            valido("password2")
            formValido++;
        }
    }

    if (formValido === 4) {
        alert("Registrado correctamente")
    }

}

function error(campo) {
    // Los campos input tienen id "input-" + campo | ejemplo: input-mail
    // Los campos de ayuda tienen id "help-" + campo | ejemplo: help-mail
    // Elimina la clase d-none para que se muestre el error
    document.getElementById("help-"+ campo).classList.remove("d-none")
    // Coloca el borde en rojo para resaltar el input erróneo
    document.getElementById("input-"+ campo).classList.add("border-danger")
}

function valido(campo) {
    // Realiza lo contrario que la función error
    try {
        document.getElementById("help-"+ campo).classList.add("d-none")
        document.getElementById("input-"+ campo).classList.remove("border-danger")
    } catch (error) {
        console.log(error)
    }
}