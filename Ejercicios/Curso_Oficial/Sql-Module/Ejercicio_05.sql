-- Actualizar el precio y el recuento de existencias de "Guerra y paz"
UPDATE Libros
SET precio = 12.99,  -- Nuevo precio después de la reducción
    stock_count = stock_count - 1  -- Reducir el recuento de existencias en una copia vendida
WHERE titulo = 'Guerra y paz';
