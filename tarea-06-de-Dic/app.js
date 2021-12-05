//OBJETO PERSONA

/*Crear un objeto llamado persona que contenga los siguientes atributos:
Nombre
Edad
DNI
Domicilio
Hijos (cantidad)
Profesión
Agregar Métodos:
Saludar ( mensaje de presentación en navegador o consola)
Listar (muestra la lista con los datos de la persona)*/

let persona = {};

const solicitarDatos = function () {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");
  let edad = parseInt(prompt("Ingrese su edad"));
  let dni = parseInt(prompt("Ingrese su DNI"));
  let domicilio = prompt("Ingrese su domicilio");
  let hijos = parseInt(prompt("Ingrese la cantidad de hijos que tienes"));
  let profesion = prompt("Ingrese su profesion");

  if (
    nombre === "" ||
    apellido === "" ||
    edad === "" ||
    dni === "" ||
    domicilio === "" ||
    hijos === "" ||
    profesion === ""
  ) {
    alert("🚨 Por favor ingrese todos los datos solicitados 🚨");
  } else {
    alert("Los datos se guardaron con exito 🎉");
    persona.Nombre = nombre;
    persona.Apellido = apellido;
    persona.Edad = edad;
    persona.Dni = dni;
    persona.Domicilio = domicilio;
    persona.Hijos = hijos;
    persona.Profesion = profesion;
    ListarDatos();
  }
};

//Funcion para saludar
const Presentacion = function () {
  console.log(
    `Hola buenas, mi nombre es ${persona.Nombre} ${persona.Apellido} tengo ${persona.Edad} años de edad, vivo en ${persona.Domicilio} actualmente mi profesion es ${persona.Profesion}. mi DNI(documento nacional de indentidad) es ${persona.Dni}`
  );
};

//Funcion para Listar los datos
const ListarDatos = function () {
  console.log("==== Datos ingresados ====");
  for (const key in persona) {
    console.log(`${key}: ${persona[key]}`);
  }
};
