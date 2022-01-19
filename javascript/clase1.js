let user = prompt("Ingrese usuario:");
let password = prompt("Ingrese contraseña:");


alert("Corrobore los datos por favor");

let userConfirmation = prompt(user + " , Ingrese usuario");
let passwordConfirmation = prompt(user + " , Ingrese contraseña");
let attempts = 3;

while ((user !== userConfirmation || password !== passwordConfirmation))  {
    attempts--;

    if (attempts === 0) {
        alert("Intentalo nuevamente en 10 minutos");
        break;
    }

    alert(`Los datos son incorrectos, te quedan: ${attempts} intento/s` );

    let userConfirmation = prompt(`${user}, Ingrese usuario`);
    let passwordConfirmation = prompt(user + " , Ingrese contraseña");
        

    if ((password == " ") || (user == " ")) {
        alert("Tenes que ingresar un valor");
    }
    
    if (user === userConfirmation && password === passwordConfirmation)  {
        alert("bienvenido " + userConfirmation);
        break;
    }
}

if ((user === userConfirmation && passwordConfirmation === password && attempts === 3)) {
    alert ("Bienvenido " + user);
}


for (let i = 1; i < 2; i++) {

    let age = prompt("Cuantos años tenes?");

    while ( age == "" ) {

        alert("Tenes que ingresar un valor");
        age = prompt("Cuantos años tenes?");


    }
    
    if ( age >= 18 ) {

        alert ("Eres mayor de edad");

    }if ( age < 18 ) {

        alert ("Eres menor de edad")
    }

    
}    
       
        