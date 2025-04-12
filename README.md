# Proyecto Backend - Diplomado
* Autores: Maroly Velasquez - Ronaldo Suarez

## Descripción
Este proyecto es una API backend para gestión de usuarios y datos utilizando Firebase.

### Requisitos:
## Ejecutar comandos
* Instalar modulos con npm i
* Levantar el servidor con node app.js

## Cómo obtener las llaves para el ambiente de entorno:
1. Ve a Firebase: [Firebase](https://firebase.google.com/?hl=es-419).
2. Crear un proyecto: Si no tienes un proyecto, crea uno nuevo.
3. En Firebase, dirígete a la sección "Configuración del proyecto" (ícono de engranaje en la parte superior izquierda).
4. En la consola de Firebase, ve a la pestaña "Configuración" > "General" y copia la clave API que aparece en "apiKey"
5. Puede que necesites copiar el "authDomain" y "projectId".
6. Tu archivo .env debe quedar parecido al `.env.example.json`

## Cómo obtener el archivo serviceAccountKey.json:
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Selecciona tu proyecto.
3. Ve a la sección "Configuración del proyecto" (ícono de engranaje) > "Cuentas de servicio".
4. Haz clic en "Generar nueva clave privada".
5. Descarga el archivo `serviceAccountKey.json` y colócalo en tu proyecto.
6. Debe verse algo similar al `serviceAccountKey.example.json`
7. Configura la variable de entorno `FIREBASE_PRIVATE_KEY_PATH` con la ruta del archivo descargado.

### Recomendaciones:
1. Para usar register debes pasar como minimo el email, password, nombre. 
2. Debes usar login con email y password.
3. Debes de crear un usuario y ponerle el rol admin en tu Firebase.
4. Un item debe tener como minimo, nombre, precio y descripción.
5. Algunas acciones requieren el token de cuando te logueas, para tener autorización con Bearer Token
