document.addEventListener("DOMContentLoaded", function () {
  const productosLink = document.querySelector(".productos > a");
  const submenu = document.querySelector(".productos .submenu");

  // Al hacer clic en el enlace de "Productos"
  productosLink.addEventListener("click", function (e) {
    e.preventDefault(); // Prevenimos que se siga el enlace (si tiene uno)

    // Alterna la clase 'active' para mostrar u ocultar el submenú
    submenu.classList.toggle("active");
  });

  // Opcional: Si deseas que al hacer clic fuera del submenú este se cierre
  document.addEventListener("click", function (e) {
    // Verifica si el clic no fue dentro del menú de productos
    if (!productosLink.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove("active"); // Cierra el submenú si se hace clic fuera
    }
  });
});
// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("header nav ul");

  // Añadir el evento click al botón hamburguesa
  menuToggle.addEventListener("click", function () {
    // Alternar la clase 'active' en el menú para mostrar/ocultar
    navMenu.classList.toggle("active");

    // Alternar la clase 'active' en el botón hamburguesa
    menuToggle.classList.toggle("active");
  });
});

// // // Función para alternar la clase 'active' en el menú
// // function toggleMenu() {
// //   const navLinks = document.querySelector("nav ul");
// //   navLinks.classList.toggle("active"); // Muestra u oculta el menú

// //   // También activar el submenú de productos en pantallas pequeñas
// //   const productos = document.querySelector(".productos");
// //   productos.classList.toggle("active");
// // }
// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();

//     // Validación básica
//     if (!nombre || !empresa || !email || !celular) {
//         responseMessage.textContent = 'Por favor, completa todos los campos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Aquí puedes agregar lógica para enviar los datos al servidor
//     console.log('Nombre:', nombre);
//     console.log('Empresa:', empresa);
//     console.log('Email:', email);
//     console.log('Celular:', celular);

//     // Mensaje de éxito
//     responseMessage.textContent = 'Formulario enviado con éxito.';
//     responseMessage.className = 'success';
// });

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios'

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligat

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos o

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los ca

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, comple

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favo

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celula

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de cel

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = '

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondremos en

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondrem

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamen

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado e

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondremos en contacto contigo.';
//         responseMessage.className = 'success

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondremos en contacto contigo.';
//         responseMessage.className = 'success';

//         // Opcional: Limpiar el formulario
//         document.getElementById('contact')

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondremos en contacto contigo.';
//         responseMessage.className = 'success';

//         // Opcional: Limpiar el formulario
//         document.getElementById('c

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita que se recargue la página

//     // Limpia mensajes anteriores
//     const responseMessage = document.getElementById('responseMessage');
//     responseMessage.textContent = '';
//     responseMessage.className = '';

//     // Obtener los valores de los campos
//     const nombre = document.getElementById('nombre').value.trim();
//     const empresa = document.getElementById('empresa').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const celular = document.getElementById('celular').value.trim();
//     const mensaje = document.getElementById('mensaje').value.trim();

//     // Validar campos manualmente si es necesario
//     if (!nombre || !email || !celular || !mensaje) {
//         responseMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
//         responseMessage.className = 'error';
//         return;
//     }

//     if (!/^\d{10}$/.test(celular)) {
//         responseMessage.textContent = 'El número de celular debe contener 10 dígitos.';
//         responseMessage.className = 'error';
//         return;
//     }

//     // Simular el envío del formulario (puedes sustituirlo con una llamada a un servidor)
//     setTimeout(() => {
//         responseMessage.textContent = '¡Formulario enviado exitosamente! Nos pondremos en contacto contigo.';
//         responseMessage.className = 'success';

//         // Opcional: Limpiar el formulario
//         document.getElementById('contactForm').reset();
//     }, 1000);
// });
