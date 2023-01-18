// REGISTRARSE
const registro = prompt("¿Desea registrarse?");

switch (registro){
    case"si":
        alert("Bienvenido, comencemos tu registro!!")
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("Apellido");
        let mail = parseInt(prompt("Mail"));

        break;
    case "no":
        alert("Muchas gracias por visitarnos");
        break;
    default:
        alert("Debe indicar si o no");
        break;

}

// ***** BUSCAR DISPONIBILIDAD *****
// DECLARAR CANTIDAD DE PERSONAS
if (registro == "si"){
    let adultos = parseInt(prompt("Cantidad de adultos"));
    let ninios = parseInt(prompt("Cantidad de niños"));

    let totalPersonas = (adultos + ninios);
    if (totalPersonas <= 2){
        alert("Puede elegir *monoambiente* o *dos ambientes*");

    }
    else if(totalPersonas = 3){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }
    else if(totalPersonas = 4){
        alert ("Debe seleccionar un dpto *dos ambientes*");
    }

    else if (4 < totalPersonas <= 6){
        alert("Puede elegir 1 *monoambiente y 1 dpto dos ambientes*; o *2 dptos dos ambientes*");
    }
    else if (6 < totalPersonas <= 8){
        alert("Debe elegir *2 dptos dos ambientes*");
    }
    
}
else{

}


// SELECCIONAR TIPO DE DEPARTAMENTO 
//(boton monoambiente) 
/*const monoambiente = 6000;

//(boton 2 ambientes)
const dosAmbientes = 9500;*/

// BUSCAR FECHAS (presentar un calendario)


// CANTIDAD DE NOCHES (como aun no se como se puede seleccionar fechas en calendario, voy a  solicitar "cantidad de noches")



/*const nocheMonoambiente = 6000;
const nocheDosAmbientes = 9500;*/
let noches = parseInt(prompt("Ingrese cantidad de noches que se hospedará"));



//OBJETOS
class departamento {
    constructor (nombre, precio){
        this.nombre = nombre,toUpperCase ();
        this.precio = parseFloat (precio);
        this.alquilado = false;
    }
}

const departamento1 = new departamento ("monoambiente", "10000");
const departamento2 = new departamento ("dosAmbientes", "12000");
departamento1.precioEstadia ();
departamento2.precioEstadia ();
departamento1.alquilar ();

console.log (departamento1.nombre)
console.log (departamento1.precio)

console.log (departamento2 ["nombre"])
console.log (departamento2 ["precio"])

//OPERADOR IN y FOR IN

console.log ("nombre" in departamento1);

for (const propiedad in departamento1){
    console.log (departamento1) [propiedad];
}

//ARRAY
const dptos = ["plantaBaja","primeroContrafrentre", "segundoFrente", "segundoContrafrente"];
//acceso
console.log (numeros [0])
//recorrido
const dptoss = ["plantaBaja","primeroContrafrentre", "segundoFrente", "segundoContrafrente"];
for (let index = 0; index <3; index++){
    alert (dptoss = [index]);
    
}
/*//CALCULAR COSTO DE ESTADIA

let precioEstadia1 = 0;
let precioEstadia2 = 0;
function multiplicar (noches, monoambiente, dosAmbientes){
    precioEstadia1 = noches * monoambiente;
    alert("El precio de su estadia es de " + precioEstadia1)
    precioEstadia2 = noches * dosAmbientes;
    alert("El precio de su estadia es de " + precioEstadia2)
}*/

   //FORMULARIO PAGINA "REGISTRARSE"
let form=[];
let submitbutton=document.getElementById("submitInput");
let todook=1;

submitbutton.onclick = () => {

    form.unshift({nombre: document.getElementById("nombreInput").value, apellido: document.getElementById("apellidoInput").value, mail: document.getElementById("mailInput").value});

    if(form[0].nombre=="" || form[0].apellido=="" || form[0].mail==""){
        alert("No puede dejar casillas en blanco");
        todook=0;
    }

    if(form[0].mail.search("@hotmail")==-1 && form[0].mail.search("@gmail")==-1 && form[0].mail.search("@yahoo")==-1 && form[0].mail.search("@live")==-1){
        alert("El email ingresado es inválido");
        todook=0;
    }else if(todook=1){
        alert("Registro exitoso!");
    }
    
}