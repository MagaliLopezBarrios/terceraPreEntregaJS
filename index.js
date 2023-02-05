// REGISTRARSE --> LO CAMBIE POR EL FORMULARIO EN PAGINA "REGISTRARSE"
/*const registro = prompt("¿Desea registrarse?");

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

}*/

// ***** BUSCAR DISPONIBILIDAD *****
// DECLARAR CANTIDAD DE PERSONAS
/*
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



let noches = parseInt(prompt("Ingrese cantidad de noches que se hospedará"));



//OBJETOS

let persona = {nombre: 'Magali', apellido: 'Lopez Barrios', mail: 'maguilopezbarrios@hotmail.com'};

console.log(persona.nombre + persona.apellido+ 'tiene el mail'+ persona.mail)

let departamentoo = {nombre:'Monoambiente', tipo: '1 Ambiente', capacidad: '2 personas', precio: 10000};

//FUNCIONES CONSTRUCTORAS
function Persona (nombre, apellido, mail){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
}

let persona1 = new Persona ('Mariano', 'Mazzini', 'mem_0013@hotmail.com');
let persona2 = new Persona ('Veronica', 'Mazzini', 'veromazzini@gmail.com');

console.log(persona);
console.log(persona1);
console.log(persona2);

function Departamentoo (nombre, tipo, capacidad, precio){
    this.nombre = nombre;
    this.tipo = tipo;
    this.capacidad = capacidad;
    this.precio = precio;
}

let departamentoo1 = new Departamentoo ('Monoambiente', '1 Ambientes', '2 personas', 10000);
let departamentoo2 = new Departamentoo ('1Contrafrente', '2 Ambientes', '4 personas', 12000);
let departamentoo3 = new Departamentoo ('2Frente', '2 Ambientes', '4 personas', 12000);
let departamentoo4 = new Departamentoo ('2Contrafrente', '2 Ambientes', '4 personas', 12000);

console.log(departamentoo);
console.log(departamentoo1);
console.log(departamentoo2);
console.log(departamentoo3);



//OPERADOR IN y FOR IN

console.log ("nombre" in departamentoo1);

for (const propiedad in departamentoo1){
    console.log (departamentoo1) [propiedad];
}


// CALCULAR PRECIO DE ESTADIA
function obtenerNochesEstadia (){
    noche = Number(prompt("Ingrese la cantidad de noches que se hospedara = 3, 4, 5, 6, 7, 8"));
    if (!(noche === 3 || noche === 4 || noche === 5 || noche === 6 || noche === 7 || noche === 8 )){
        alert ("Ingrese un numero de noches valido (3,4,5,6,7,8");
    noche = obtenerNochesEstadia ();

    }

    return noche;
}

function obtenerPrecioEstadia() {
    let noche = obtenerNochesEstadia ();
    let precio = departamentoo.precio ();
    let precioEstadia = obtenerPrecioEstadia (noche, precio);

    alert ("El valor de su estadia es"+ precio * noche);

}


//ARRAY
let ubicacionDpto = ['plantaBaja','primeroContrafrente', 'segundoFrente', 'segundoContrafrente'];
//acceso
console.log (ubicacionDpto);

console.log (ubicacionDpto.length);

console.log (ubicacionDpto [1]);

ubicacionDpto.push ('terceroFrente');
console.log (ubicacionDpto);

//recorrido
for (let index = 0; index <3; index++){
    alert (dptos = [index]);
    
}*/


   //FORMULARIO PAGINA "REGISTRARSE" (reemplaza a los "prompt usados en la entrega anterior para el registro")
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

let objUsuario = {
    nombre : 'Magali',
    apellido : 'Lopez Barrios',
    mail : 'maguilopezbarrios@hotmail.com',
}

localStorage.setItem ('usuario', JSON.stringify (objUsuario));
console.log (localStorage.getItem ('usuario'));