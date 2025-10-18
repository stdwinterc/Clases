// === CLASE PERSONA ===
class Persona {
  constructor(nombre, apellido, nacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
  }

  caminar() {
    return `La persona ${this.nombre} ${this.apellido} está caminando.`;
  }

  edad() {
    const actual = new Date().getFullYear();
    const edad = actual - this.nacimiento;
    return `La edad de ${this.nombre} ${this.apellido} es de ${edad} años.`;
  }
}

// === CLASE AVIÓN ===
class Avion {
  constructor(marca, color, tipo) {
    this.marca = marca;
    this.color = color;
    this.tipo = tipo;
  }

  mostrarMarca() {
    return `La marca de este avión es ${this.marca}.`;
  }

  mostrarColor() {
    return `El color de este avión es ${this.color}.`;
  }
}

// === CLASE CLIENTE ===
class Cliente {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
  }

  mostrarNombre() {
    return `El cliente se llama ${this.nombre} ${this.apellido}.`;
  }

  mostrarTelefono() {
    return `El número de teléfono de ${this.nombre} es ${this.telefono}.`;
  }
}

// === CLASE PROVEEDOR ===
class Proveedor {
  constructor(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
  }

  mostrarNombre() {
    return `El nombre de nuestro proveedor es ${this.nombre}.`;
  }

  mostrarApellido() {
    return `El apellido de nuestro proveedor es ${this.apellido}.`;
  }
}

// === CLASE ESTUDIANTE ===
class Estudiante {
  constructor(nombre, apellido, activo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.activo = activo;
  }

  mostrarNombre() {
    return `El nombre del estudiante es ${this.nombre} ${this.apellido}.`;
  }

  mostrarEstado() {
    return `El estado del estudiante dentro del establecimiento es: ${this.activo}.`;
  }
}

// === INSTANCIAS ===
const persona = new Persona('Daniel', 'Winter', 2006);
const avion = new Avion('Avianca', 'Blanco', 'Comercial');
const cliente = new Cliente('Samuel', 'Morales', '55395079');
const proveedor = new Proveedor('Jose', 'Valdizon', 'josevaldi@gmail.com');
const estudiante = new Estudiante('Daniel', 'Morales', 'Activo');

// === FUNCIÓN AUXILIAR DOM ===
function mostrarResultado(id, mensaje) {
  const elemento = document.getElementById(id);
  elemento.style.opacity = 0;
  setTimeout(() => {
    elemento.textContent = mensaje;
    elemento.style.opacity = 1;
  }, 150);
}

// === LIMPIAR RESULTADOS ===
function limpiarResultados() {
  document.querySelectorAll('.resultado').forEach(div => {
    div.style.opacity = 0;
    setTimeout(() => {
      div.textContent = '';
      div.style.opacity = 1;
    }, 150);
  });
}

// === EVENTOS ===
// Persona
document.getElementById('btnCaminar').addEventListener('click', () => {
  mostrarResultado('resPersona', persona.caminar());
});
document.getElementById('btnEdad').addEventListener('click', () => {
  mostrarResultado('resPersona', persona.edad());
});

// Avión
document.getElementById('btnMarcaAvion').addEventListener('click', () => {
  mostrarResultado('resAvion', avion.mostrarMarca());
});
document.getElementById('btnColorAvion').addEventListener('click', () => {
  mostrarResultado('resAvion', avion.mostrarColor());
});

// Cliente
document.getElementById('btnNombreCliente').addEventListener('click', () => {
  mostrarResultado('resCliente', cliente.mostrarNombre());
});
document.getElementById('btnTelefonoCliente').addEventListener('click', () => {
  mostrarResultado('resCliente', cliente.mostrarTelefono());
});

// Proveedor
document.getElementById('btnNombreProveedor').addEventListener('click', () => {
  mostrarResultado('resProveedor', proveedor.mostrarNombre());
});
document.getElementById('btnApellidoProveedor').addEventListener('click', () => {
  mostrarResultado('resProveedor', proveedor.mostrarApellido());
});

// Estudiante
document.getElementById('btnNombreEstudiante').addEventListener('click', () => {
  mostrarResultado('resEstudiante', estudiante.mostrarNombre());
});
document.getElementById('btnEstadoEstudiante').addEventListener('click', () => {
  mostrarResultado('resEstudiante', estudiante.mostrarEstado());
});

// Limpiar
document.getElementById('btnLimpiar').addEventListener('click', limpiarResultados);
