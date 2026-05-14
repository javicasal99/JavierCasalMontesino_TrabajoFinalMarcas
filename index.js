const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Array libros
let libros = [
  {
    id: 1,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
    anio: 1967,
    paginas: 471,
    disponible: true,
    valoracion: 9.5,
    editorial: "Editorial Sudamericana",
    sinopsis:
      "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
  },
  {
    id: 2,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Distopía",
    anio: 1949,
    paginas: 328,
    disponible: true,
    valoracion: 9.2,
    editorial: "Secker & Warburg",
    sinopsis:
      "Una sociedad totalitaria donde el Gran Hermano controla cada aspecto de la vida humana.",
  },
  {
    id: 3,
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    anio: 1954,
    paginas: 1216,
    disponible: false,
    valoracion: 9.8,
    editorial: "Allen & Unwin",
    sinopsis:
      "La épica aventura de Frodo Bolsón para destruir el Anillo Único y salvar la Tierra Media.",
  },
  {
    id: 4,
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Novela clásica",
    anio: 1605,
    paginas: 1023,
    disponible: true,
    valoracion: 8.9,
    editorial: "Francisco de Robles",
    sinopsis:
      "Las aventuras del hidalgo Alonso Quijano, quien enloquece leyendo libros de caballerías.",
  },
  {
    id: 5,
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    genero: "Fantasía",
    anio: 1997,
    paginas: 309,
    disponible: true,
    valoracion: 8.7,
    editorial: "Bloomsbury",
    sinopsis:
      "Un niño huérfano descubre que es un mago y comienza sus estudios en el colegio Hogwarts.",
  },
  {
    id: 6,
    titulo: "El nombre del viento",
    autor: "Patrick Rothfuss",
    genero: "Fantasía",
    anio: 2007,
    paginas: 662,
    disponible: false,
    valoracion: 9.1,
    editorial: "DAW Books",
    sinopsis:
      "La historia de Kvothe, un legendario mago y músico, narrada por él mismo en una posada.",
  },
  {
    id: 7,
    titulo: "Dune",
    autor: "Frank Herbert",
    genero: "Ciencia ficción",
    anio: 1965,
    paginas: 688,
    disponible: true,
    valoracion: 9.3,
    editorial: "Chilton Books",
    sinopsis:
      "Paul Atreides lucha por sobrevivir en el planeta desértico Arrakis, fuente de la especia más valiosa del universo.",
  },
  {
    id: 8,
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance clásico",
    anio: 1813,
    paginas: 432,
    disponible: true,
    valoracion: 8.8,
    editorial: "T. Egerton",
    sinopsis:
      "Elizabeth Bennet navega las expectativas sociales y el amor en la Inglaterra del siglo XIX.",
  },
];

// Array resenas
let resenas = [
  {
    id: 1,
    libro_id: 1,
    usuario: "ManuAparicio06",
    comentario:
      "Una obra maestra de la literatura latinoamericana, imprescindible.",
    puntuacion: 10,
    fecha: "2024-01-15",
  },
  {
    id: 2,
    libro_id: 1,
    usuario: "XxFreiraxX",
    comentario: "Compleja pero increíblemente hermosa. La recomiendo mucho.",
    puntuacion: 9,
    fecha: "2024-02-20",
  },
  {
    id: 3,
    libro_id: 2,
    usuario: "Almazo97",
    comentario: "Escalofriante y muy actual. Orwell era un visionario.",
    puntuacion: 10,
    fecha: "2024-01-10",
  },
  {
    id: 4,
    libro_id: 2,
    usuario: "LaCabra69",
    comentario: "Algo lento al principio pero el final te deja sin palabras.",
    puntuacion: 8,
    fecha: "2024-03-05",
  },
  {
    id: 5,
    libro_id: 3,
    usuario: "Messilover",
    comentario: "El mejor libro de fantasía jamás escrito. Sin discusión.",
    puntuacion: 10,
    fecha: "2024-01-22",
  },
  {
    id: 6,
    libro_id: 5,
    usuario: "Hachahtml",
    comentario: "Mi libro favorito desde niño. Siempre lo releo con alegría.",
    puntuacion: 9,
    fecha: "2024-02-14",
  },
  {
    id: 7,
    libro_id: 7,
    usuario: "Bicholover",
    comentario: "Dune es la biblia de la ciencia ficción. Absolutamente épico.",
    puntuacion: 10,
    fecha: "2024-03-18",
  },
  {
    id: 8,
    libro_id: 4,
    usuario: "Gokussj1",
    comentario: "Un genio adelantado a su tiempo. Cervantes es insuperable.",
    puntuacion: 9,
    fecha: "2024-04-01",
  },
];

//  Usa el valor 9 para ir autoincrementando
let nextLibroId = 9;
let nextResenaId = 9;


// Endpoints Libros


// GET todos los libros
app.get("/libros", (req, res) => {
  res.json(libros);
});

// GET buscar libros con filtros
app.get("/libros/buscar", (req, res) => {
  let resultado = libros;

  if (req.query.titulo) {
    resultado = resultado.filter((libro) =>
      libro.titulo.includes(req.query.titulo),
    );
  }
  if (req.query.autor) {
    resultado = resultado.filter((libro) =>
      libro.autor.toLowerCase().includes(req.query.autor.toLowerCase()),
    );
  }
  if (req.query.genero) {
    resultado = resultado.filter((libro) =>
      libro.genero.toLowerCase().includes(req.query.genero.toLowerCase()),
    );
  }
  if (req.query.disponible) {
    if (req.query.disponible == "true") {
      resultado = resultado.filter((libro) => libro.disponible == true);
    }
    if (req.query.disponible == "false") {
      resultado = resultado.filter((libro) => libro.disponible == false);
    }
  }
  if (req.query.ordenar_por) {
    const campo = req.query.ordenar_por;
    resultado.sort((a, b) => {
      if (req.query.orden == "desc") {
        if (a[campo] > b[campo]) return -1;
        if (a[campo] < b[campo]) return 1;
      } else {
        if (a[campo] > b[campo]) return 1;
        if (a[campo] < b[campo]) return -1;
      }
      return 0;
    });
  }

  res.json(resultado);
});

// GET libro por id
app.get("/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find((libro) => libro.id == id);
  if (!libro) {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  } else {
    res.json(libro);
  }
});

// GET buscar libro por titulo
app.get("/buscar-libro", (req, res) => {
  const titulo = req.query.titulo;
  const libro = libros.find(
    (libro) => libro.titulo.toLowerCase() == titulo.toLowerCase(),
  );
  if (!libro) {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  } else {
    res.json(libro);
  }
});

// POST crear libro
app.post("/libros", (req, res) => {
  const {
    titulo,
    autor,
    genero,
    anio,
    paginas,
    disponible,
    valoracion,
    editorial,
    sinopsis,
  } = req.body;
  if (
    !titulo ||
    !autor ||
    !genero ||
    !anio ||
    !paginas ||
    !editorial ||
    !sinopsis
  ) {
    return res.status(400).json({
      mensaje: "Faltan campos obligatorios",
      campos_obligatorios: [
        "titulo",
        "autor",
        "genero",
        "anio",
        "paginas",
        "editorial",
        "sinopsis",
      ],
    });
  }
  const nuevoLibro = {
    id: nextLibroId++,
    titulo,
    autor,
    genero,
    anio,
    paginas,
    disponible,
    valoracion,
    editorial,
    sinopsis,
  };
  libros.push(nuevoLibro);
  res.status(201).json({ mensaje: "Libro añadido", libro: nuevoLibro });
});

// PUT modificar libro
app.put("/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find((libro) => libro.id == id);
  if (!libro) {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  } else {
    libro.titulo = req.body.titulo;
    libro.autor = req.body.autor;
    libro.genero = req.body.genero;
    libro.anio = req.body.anio;
    libro.paginas = req.body.paginas;
    libro.disponible = req.body.disponible;
    libro.valoracion = req.body.valoracion;
    libro.editorial = req.body.editorial;
    libro.sinopsis = req.body.sinopsis;
    res.json({ mensaje: "Libro actualizado", libro: libro });
  }
});

// DELETE eliminar libro
app.delete("/libros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = libros.findIndex((libro) => libro.id == id);
  if (indice == -1) {
    res.status(404).json({ mensaje: "Libro no encontrado" });
  } else {
    libros.splice(indice, 1);
    res.json({ mensaje: "Libro eliminado" });
  }
});


// Endpoints resenas


// GET todas las resenas
app.get("/resenas", (req, res) => {
  res.json(resenas);
});

// GET resenas de un libro concreto
app.get("/libros/:id/resenas", (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libros.find((l) => l.id == id);
  if (!libro) {
    return res.status(404).json({ mensaje: "Libro no encontrado" });
  }
  const resenasLibro = resenas.filter((r) => r.libro_id == id);
  res.json(resenasLibro);
});

// GET buscar resenas por texto (debe ir ANTES de /resenas/:id)
app.get("/resenas/buscar", (req, res) => {
  const { texto } = req.query;
  if (!texto) {
    return res
      .status(400)
      .json({ mensaje: "Debes indicar el parámetro texto" });
  }
  const resultado = resenas.filter(
    (r) =>
      r.comentario.toLowerCase().includes(texto.toLowerCase()) ||
      r.usuario.toLowerCase().includes(texto.toLowerCase()),
  );
  res.json(resultado);
});

// POST crear resena
app.post("/resenas", (req, res) => {
  const libro_id = req.body.libro_id;
  const usuario = req.body.usuario;
  const comentario = req.body.comentario;
  const puntuacion = req.body.puntuacion;
  const fecha = req.body.fecha;

  if ( !libro_id || !usuario || !comentario || puntuacion === undefined || !fecha) {
    return res.status(400).json({
      mensaje: "Faltan campos obligatorios",
      campos_obligatorios: [
        "libro_id",
        "usuario",
        "comentario",
        "puntuacion",
        "fecha",
      ],
    });
  }
  const libro = libros.find((l) => l.id == libro_id);
  if (!libro) {
    return res.status(404).json({ mensaje: "El libro indicado no existe" });
  }
  const nuevaResena = {
    id: nextResenaId++,
    libro_id,
    usuario,
    comentario,
    puntuacion,
    fecha,
  };
  resenas.push(nuevaResena);
  res.status(201).json({ mensaje: "Resena añadida", resena: nuevaResena });
});

// DELETE eliminar resena
app.delete("/resenas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = resenas.findIndex((r) => r.id == id);
  if (indice == -1) {
    return res.status(404).json({ mensaje: "Resena no encontrada" });
  }
  resenas.splice(indice, 1);
  res.json({ mensaje: "Resena eliminada" });
});



// Estadísticas generales
app.get("/estadisticas/libros", (req, res) => {
  let suma = 0;
  libros.forEach((libro) => {
    suma = suma + libro.valoracion;
  });
  let media = suma / libros.length;
  let disponibles = libros.filter((libro) => libro.disponible == true).length;
  let noDisponibles = libros.filter(
    (libro) => libro.disponible == false,
  ).length;
  res.json({
    total_libros: libros.length,
    total_resenas: resenas.length,
    disponibles: disponibles,
    no_disponibles: noDisponibles,
    valoracion_media: media,
  });
});

// Top libros
app.get("/estadisticas/top", (req, res) => {
  let n = 3;
  if (req.query.n) {
    n = parseInt(req.query.n);
  }
  let resultado = [...libros];
  resultado.sort((a, b) => {
    if (a.valoracion > b.valoracion) return -1;
    if (a.valoracion < b.valoracion) return 1;
    return 0;
  });
  resultado = resultado.slice(0, n);
  res.json(resultado);
});

// Contar libros por género
app.get("/estadisticas/generos", (req, res) => {
  let conteo = {};
  libros.forEach((libro) => {
    if (conteo[libro.genero]) {
      conteo[libro.genero]++;
    } else {
      conteo[libro.genero] = 1;
    }
  });
  res.json(conteo);
});

// Arranque del servidor
app.listen(PORT, () => {
  console.log(
    `Servidor de la Biblioteca arrancado correctamente en http://localhost:${PORT}`,
  );
});
