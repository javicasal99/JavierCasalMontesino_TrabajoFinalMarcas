# JavierCasalMontesino_TrabajoFinalMarcas

Biblioteca API

API sencilla de una biblioteca elaborada con node.js y express.js

Este proyecto permite gestionar libros y reseñas usando diferentes endpoints


-- CÓMO INICIAR EL PROYECTO --

Desde el terminal:

instalar dependencias: npm install
iniciar el servidor: node index.js
servidor ejecutado en: http://localhost:3000


-- RECURSOS PRINCIPALES --

La API trabaja con dos recursos principales:

- Libros
- Reseñas

Las reseñas están relacionadas con los libros mediante libro_id.

-- ENDPOINTS DISPONIBLES --



- Libros

Método, ruta, función

- GET /libros	
Mostrar todos los libros

Ejemplo:
GET http://localhost:3000/libros

- GET /libros/:id	
Mostrar un libro por ID

Ejemplo:
GET http://localhost:3000/libros/1

- GET /buscar-libro?titulo=
	Buscar libro por título

Ejemplo:
GET http://localhost:3000/buscar-libro?titulo=1984

- POST /libros
	Añadir un nuevo libro

Ejemplo:
POST http://localhost:3000/libros
Body:
{
  "titulo": "El principito",
  "autor": "Antoine de Saint-Exupéry",
  "genero": "Fábula",
  "anio": 1943,
  "paginas": 96,
  "editorial": "Reynal",
  "sinopsis": "Un aviador conoce a un príncipe."
}

- PUT /libros/:id	
Modificar un libro
Ejemplo: PUT http://localhost:3000/libros/1

Body:
{
  "disponible": false
}

- DELETE /libros/:id	
Eliminar un libro
Ejemplo: DELETE http://localhost:3000/libros/1

-- RESEÑAS --

Método, ruta, función

- GET /reseñas	
Mostrar todas las reseñas
Ejemplo: GET http://localhost:3000/resenas

- GET /libros/:id/reseñas
	Mostrar reseñas de un libro
    Ejemplo: GET http://localhost:3000/libros/1/resenas

- POST /reseñas	
Crear una reseña
Ejemplo: POST http://localhost:3000/resenas
Body:
{
  "libro_id": 1,
  "usuario": "Juan",
  "comentario": "Muy buen libro",
  "puntuacion": 5,
  "fecha": "2026-01-01"
}

DELETE /resenas/:id
	Eliminar una reseña
    Ejemplo: DELETE http://localhost:3000/resenas/1

-- FILTROS Y BÚSQUEDAS --

Ruta, función

- /libros/buscar?titulo=	
Filtrar por título

Ejemplo: GET http://localhost:3000/libros/buscar?titulo=1984

- /libros/buscar?autor=	
Filtrar por autor

Ejemplo: GET http://localhost:3000/libros/buscar?autor=Cervantes

- /libros/buscar?genero=
	Filtrar por género

    Ejemplo: GET http://localhost:3000/libros/buscar?genero=novela

- /libros/buscar?disponible=true
	Mostrar disponibles

    Ejemplo: GET http://localhost:3000/libros/buscar?disponible=true


- /libros/buscar?ordenar_por=valoracion&orden=desc
	Ordenar resultados

    Ejemplos: GET http://localhost:3000/libros/buscar?ordenar_por=valoracion&orden=desc

-- BUSCAR RESEÑAS --

  Ruta, función

/reseñas/buscar?texto=
	Buscar texto en comentarios
    Ejemplo: GET http://localhost:3000/resenas/buscar?texto=excelente

-- ESTADÍSTICAS --

Ruta, función

- /estadisticas/libros	

Mostrar estadísticas generales
Ejemplo: GET http://localhost:3000/estadisticas/libros

- /estadisticas/top?n=3	
Top libros por valoración
Ejemplo:GET http://localhost:3000/estadisticas/top?n=3

- /estadisticas/generos
	Contar libros por género
    Ejemplo: GET http://localhost:3000/estadisticas/generos

-- CAMPOS DE LOS DATOS --

Los libros tienen los siguientes campos:

- id
- titulo
- autor
- genero
- anio
- paginas
- disponible
- valoracion
- editorial
- sinopsis
- Reseña

Las reseñas tienen:

- id
- libro_id
- usuario
- comentario
- puntuacion
- fecha
- Códigos HTTP usados
- Código	Significado
- 200	Todo correcto
- 201	Recurso creado
- 400	Datos incorrectos
- 404	Recurso no encontrado
- 500	Error del servidor
- Tecnologías utilizadas
- JavaScript
- Node.js
- Express
- API REST
- JSON
