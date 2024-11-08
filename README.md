# Taller2-Express

# Pokénea App

Pokénea App es una aplicación web desarrollada con Node.js y Express, diseñada para mostrar información de criaturas ficticias llamadas "Pokéneas". La aplicación permite obtener datos aleatorios en formato JSON o visualizarlos en una plantilla HTML.

## Características

- Genera información aleatoria sobre un Pokénea desde un conjunto de datos predefinido.
- Devuelve un JSON con información del Pokénea.
- Muestra la imagen y detalles del Pokénea en una página web utilizando EJS.
- Incluye el ID del contenedor Docker desde el que se ejecuta la aplicación.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework para la creación de servidores web.
- **EJS**: Motor de plantillas para generar vistas dinámicas.
- **Bootstrap**: Framework de CSS para estilos y diseño responsivo.
- **Docker**: Contenedor para ejecutar la aplicación.

## Estructura del proyecto

```plaintext
pokedex-project/
├── config/
│   └── app.js
├── node_modules/
├── resources/
│   ├── views/
│   │   ├── index.ejs
│   │   └── pokenea.ejs
├── src/
│   ├── controllers/
│   │   └── pokeneaController.js
│   ├── database/
│   │   └── pokeneas.js
│   ├── models/
│   │   └── pokenea.js
│   ├── routes/
│   │   └── pokeneaRoutes.js
│   └── util/
│       └── pokeneaUtil.js
├── .env
├── .gitignore
├── Dockerfile
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

## Instalacion 

Clona este repositorio en tu máquina local:

```bash
git https://github.com/Juanstevan1/Taller2-Express.git
cd Taller2-Express
```

### Instala las dependencias del proyecto:

```bash
npm install
```

Configura las variables de entorno en el archivo `.env`:

```plaintext
PORT=80
```

## Uso

### Local

Inicia la aplicación:

```bash
node index.js
```

Accede a la aplicación desde tu navegador:

- JSON aleatorio: [http://localhost:80/json](http://localhost:80/json)
- Vista HTML: [http://localhost:80/image](http://localhost:80/image)