CREATE USER 'martin'@'localhost' IDENTIFIED BY 'tu_contraseña';
GRANT SELECT, UPDATE ON nombre_de_tu_base_de_datos.Libros TO 'martin'@'localhost';
REVOKE DELETE ON nombre_de_tu_base_de_datos.Libros FROM 'martin'@'localhost';
