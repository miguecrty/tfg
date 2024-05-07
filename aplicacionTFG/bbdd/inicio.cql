DROP KEYSPACE IF EXISTS tfg;
CREATE KEYSPACE IF NOT EXISTS tfg WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Creamos la tabla datos
CREATE TABLE IF NOT EXISTS tfg.usuarios (
nombre_usu TEXT PRIMARY KEY,
clave TEXT,
lugares map<text,text>
);

CREATE TABLE IF NOT EXISTS tfg.prueba (
i BIGINT,
b TIMESTAMP,
PRIMARY KEY(i,b)
)WITH CLUSTERING ORDER BY(b desc);

--CREATE TABLE IF NOT EXISTS tfg.datos_usuario (id_dato UUID PRIMARY KEY,nombre_lugar TEXT,tiempo TEXT, tiempo_descripcion TEXT, temperatura map<text,float>, viento map<text,float>,nubes map<text,float>);

CREATE TABLE IF NOT EXISTS tfg.datos_usuario (
nombre_lugar TEXT,
tiempo map<text,text>, 
temperatura map<text,float>,
viento map<text,float>,
nubes map<text,float>,
toma TIMESTAMP,
PRIMARY KEY(nombre_lugar,toma)
) WITH CLUSTERING ORDER BY(toma DESC);

INSERT INTO tfg.usuarios (nombre_usu,clave,lugares) 
VALUES ('usuario', 'clave',null);

