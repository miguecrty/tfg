DROP KEYSPACE IF EXISTS tfg;
CREATE KEYSPACE IF NOT EXISTS tfg WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Creamos la tabla datos
CREATE TABLE IF NOT EXISTS tfg.usuarios (
nombre_usu TEXT PRIMARY KEY,
clave TEXT,
email TEXT,
lugares map<text,text>
);

CREATE TABLE IF NOT EXISTS tfg.datos_usuario (
nombre_lugar TEXT,
tiempo map<text,text>, 
temperatura map<text,float>,
viento map<text,float>,
nubes map<text,float>,
toma TIMESTAMP,
PRIMARY KEY(nombre_lugar,toma)
) WITH CLUSTERING ORDER BY(toma DESC);

-- Creamos la tabla lugares
CREATE TABLE IF NOT EXISTS tfg.lugares (
lugar TEXT,
nombre_usu TEXT,
lat TEXT,
lon TEXT,
avanzada BOOLEAN,
PRIMARY KEY(lugar,nombre_usu)
);

INSERT INTO tfg.usuarios (nombre_usu,clave,email,lugares) 
VALUES ('usuario', 'clave','miguelangelloppez7@gmail.com',null);

