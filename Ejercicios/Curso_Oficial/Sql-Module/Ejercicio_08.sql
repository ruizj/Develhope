-- Iniciar una transacción
START TRANSACTION;

-- Intentar eliminar el libro con BookID = 103
DELETE FROM Libros
WHERE book_id = 103;

-- Verificar si se eliminó correctamente el libro (opcional)
SELECT * FROM Libros WHERE book_id = 103;

-- Revertir la transacción (deshacer el cambio)
ROLLBACK;
