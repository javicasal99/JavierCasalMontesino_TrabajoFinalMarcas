const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

//Array colección de libros

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
    sinopsis: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo."
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
    sinopsis: "Una sociedad totalitaria donde el Gran Hermano controla cada aspecto de la vida humana."
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
    sinopsis: "La épica aventura de Frodo Bolsón para destruir el Anillo Único y salvar la Tierra Media."
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
    sinopsis: "Las aventuras del hidalgo Alonso Quijano, quien enloquece leyendo libros de caballerías."
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
    sinopsis: "Un niño huérfano descubre que es un mago y comienza sus estudios en el colegio Hogwarts."
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
    sinopsis: "La historia de Kvothe, un legendario mago y músico, narrada por él mismo en una posada."
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
    sinopsis: "Paul Atreides lucha por sobrevivir en el planeta desértico Arrakis, fuente de la especia más valiosa del universo."
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
    sinopsis: "Elizabeth Bennet navega las expectativas sociales y el amor en la Inglaterra del siglo XIX."
  }
];

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor de la Biblioteca arrancado correctamente`);
});