--1 Mostrar a las pasajeras que sobrevivieron y que tienen más de 30 años:

SELECT *
FROM Titanic
WHERE Sobrevivido = 1
  AND Sexo = 'female'
  AND Edad > 30;

  --2 Encontrar la edad promedio de los hombres que no sobrevivieron:

  SELECT AVG(Edad) AS EdadPromedioHombresNoSobrevivientes
FROM Titanic
WHERE Sobrevivido = 0
  AND Sexo = 'male';

--3 Mostrar información para los pasajeros que gastaron entre $20 y $50 en sus boletos y subieron al barco en el puerto 'C':

SELECT *
FROM Titanic
WHERE Tarifa BETWEEN 20 AND 50
  AND Embarcado = 'C';

 --4  Calcular el número total de supervivientes de la primera clase:

 SELECT COUNT(*) AS TotalSupervivientesPrimeraClase
FROM Titanic
WHERE Sobrevivido = 1
  AND Pclass = 1;

--5 Mostrar la información de los pasajeros que embarcaron desde Cherburgo (puerto 'C') y gastaron más de $75 en sus billetes:

SELECT *
FROM Titanic
WHERE Embarcado = 'C'
  AND Tarifa > 75;
