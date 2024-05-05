CREATE KEYSPACE IF NOT EXISTS tfg WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Creamos la tabla datos
CREATE TABLE IF NOT EXISTS tfg.usuarios (
id_usu UUID PRIMARY KEY,
nombre_usu TEXT,
clave TEXT,
);

INSERT INTO tfg.usuarios (id_usu, nombre_usu,clave) 
VALUES (uuid(), 'usuario', 'clave');

