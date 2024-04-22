CREATE TABLE Libros (
    book_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    año_publicado INT,
    isbn VARCHAR(20),
    precio DECIMAL(10, 2) NOT NULL,
    calificacion FLOAT,
    stock_count INT
);
