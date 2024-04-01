// src/serviceWorkerRegistration.js
// Este archivo se encarga de registrar el Service Worker

// Verifica si el navegador es compatible con Service Workers
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//       navigator.serviceWorker
//         .register('/service-worker.js')
//         .then(registration => {
//           console.log('Service Worker registrado con éxito:', registration);
//         })
//         .catch(error => {
//           console.error('Error al registrar el Service Worker:', error);
//         });
//     });
//   } else {
//     console.log('Los Service Workers no son soportados en este navegador.');
//   }

// src/serviceWorkerRegistration.js

// export function register() {
//     if ('serviceWorker' in navigator) {
//       window.addEventListener('load', () => {
//         navigator.serviceWorker
//           .register('/service-worker.js')
//           .then(registration => {
//             console.log('Service Worker registrado con éxito:', registration);
//           })
//           .catch(error => {
//             console.error('Error al registrar el Service Worker:', error);
//           });
//       });
//     } else {
//       console.log('Los Service Workers no son soportados en este navegador.');
//     }
//   }
  

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('Service worker registered:', registration);
      }).catch(error => {
        console.log('Service worker registration failed:', error);
      });
    });
  }
}