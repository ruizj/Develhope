-- Revocar permisos de actualización (UPDATE) de la tabla Libros para Martin
REVOKE UPDATE ON nombre_de_tu_base_de_datos.Libros FROM 'martin'@'localhost';
