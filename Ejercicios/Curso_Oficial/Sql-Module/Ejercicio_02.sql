-- Primero, eliminaremos la tabla existente si ya existe
DROP TABLE IF EXISTS Libros;

-- Luego, crearemos la nueva tabla "Libros" con columnas adicionales
CREATE TABLE Libros (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    año_publicado INT,
    isbn VARCHAR(20),
    precio DECIMAL(10, 2) NOT NULL,
    calificacion FLOAT,
    stock_count INT,
    editor VARCHAR(255),        -- Nueva columna para el nombre del editor
    num_paginas INT              -- Nueva columna para el número de páginas del libro
);
