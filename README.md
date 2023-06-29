# YuzuSHopOnline
Venta de Indumentaria Deportiva para Mujer y Ropa Urbana para Hombre.
Este es un proyecto de ecommerce básico. La aplicacion permite ver una lista de productos y realizar compras en linea. Los productos y las ordenes de compra se almacenan en Firebase.

## Herramientas utilizadas
React
React Router
Firebase

## Funcionalidades
° Ver una lista de productos disponible
° Agregar productos al carrito de compras
° Ver el carrito de compras
° Realizar una orden de compras

### Ejecucion de la aplicacion.

Para instalar y ejecutar la aplicacion en tu maquina local, sigue los siguientes pasos:
- Clona el repositorio a tu maquina local.
- Abre una terminal en el directorio del proyecto.
- Ejecuta el comando npm install para instalar las dependencias.
- Ejecuta el comando npm run dev y navega a htpp:localhost:5173 para ver la aplicacion en accion.

## Configuracion de Firebase

 ### Para utilizar Firebase en esta aplicacion, debes seguir los siguientes pasos:
1- Crea una cuenta en Firebase y crea un nuevo proyecto.
2- En la seccion "Authentication" de Firebase, habilita el proveedor de autenticacion de correo electronico y contraseña.
3- En la seccion "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autentificados.
4- En la seccion "Proyect settings" de Firebase, haz clic en "add app" y sigue las instrucciones para agregar una nueva aplicacion web.
5- Copia las credenciales de Firebase y configura las variables de entorno en el archivo . env de tu proyecto.

## Licencia
Este proyecto esta licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener mas informacion.