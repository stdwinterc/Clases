const vehiculo = {
marca: 'Toyota',
modelo: 'Corolla',
fecha: 2020,


arrancar: function(){console.log(`El ${vehiculo.marca} ${vehiculo.modelo} ha arrancado`);},

detener:function(){console.log(`El ${vehiculo.marca} ${vehiculo.modelo} se ha detenido`);},

calcularfecha: function() {
const fechaActual = new Date();
const edad = fechaActual.getFullYear() - this.fecha;
console.log(`El ${vehiculo.marca} ${vehiculo.modelo} tiene una edad de: ${edad }años`)

},
};
vehiculo.arrancar();
vehiculo.detener();
vehiculo.calcularfecha();




const persona = {
nombre: 'Daniel',
apellido: 'Winter',
fecha_de_nacimiento: 2006,

caminar: function(){console.log(`La persona ${persona.nombre} de apellido ${persona.apellido} esta caminando`)},
edad: function(){
const fechaActual = new Date();
const edad1 = fechaActual.getFullYear()-this.fecha_de_nacimiento;
console.log(`La edad de ${persona.nombre} ${persona.apellido} es de: ${edad1}`)
}
};
persona.caminar();
persona.edad();


const avion = {
marca: 'Avianca',
color: 'Blanco',
tipo:  'Comercial',

mmarca: function(){console.log(`La marca de este avion es: ${avion.marca}`)},
ccolor: function(){console.log(`El color de este avion es: ${avion.color}`)},
};
avion.mmarca();
avion.ccolor();


const cliente = {
nombre: 'Samuel',
apellido: 'Morales',
telefono: '55395079',

nnombre: function(){console.log(`El cliente se llama: ${cliente.nombre} ${cliente.apellido}`)},
ttelefono: function(){console.log(`El numero de telefono de ${cliente.nombre} es: ${cliente.telefono}`)},

};

cliente.nnombre();
cliente.ttelefono();


const proveedor = {
nombre: 'Jose',
apellido: 'Valdizon',
correo: 'josevaldi@gmail.com',

nombres: function(){console.log(`El nombre de nuestro proveedor es: ${proveedor.nombre}`)},
apellidos: function(){console.log(`El apellido de nuestro proveedor es: ${proveedor.apellido}`)}
}

proveedor.nombres();
proveedor.apellidos();

const estudiante = {
nombre:'Daniel',
apellido: 'Morales',
activo:'Verdadero',

nombres: function(){console.log(`El nombre de nuestro proveedor es: ${estudiante.nombre}`)},
estado: function(){console.log(`El estado de el estudiante dentro de el estabelcimiento es: ${estudiante.activo}`)}

}

estudiante.nombres();
estudiante.estado();