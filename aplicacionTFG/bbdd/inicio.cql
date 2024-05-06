CREATE KEYSPACE IF NOT EXISTS tfg WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Creamos la tabla datos
CREATE TABLE IF NOT EXISTS tfg.usuarios (
id_usu UUID PRIMARY KEY,
nombre_usu TEXT,
clave TEXT,
lugares set<TEXT>
);

--CREATE TABLE IF NOT EXISTS tfg.datos_usuario (id_dato UUID PRIMARY KEY,nombre_lugar TEXT,tiempo TEXT, tiempo_descripcion TEXT, temperatura map<text,float>, viento map<text,float>,nubes map<text,float>);

CREATE TABLE IF NOT EXISTS tfg.datos_usuario (
id_dato UUID PRIMARY KEY,
nombre_lugar TEXT,
tiempo TEXT, 
tiempo_descripcion TEXT,
temperatura map<text,float>,
viento map<text,float>,
nubes map<text,float>
);

INSERT INTO tfg.usuarios (id_usu, nombre_usu,clave,lugares) 
VALUES (uuid(), 'usuario', 'clave',{});

INSERT INTO datos_usuario (id_dato , nombre_lugar , nubes , temperatura , tiempo, tiempo_descripcion , viento ) 
VALUES ( uuid(),'Cartaya',{'all':100},{'temp':291.26,'feels_like':290.61,'temp_min':290.47},'Clouds','nubes',{'speed':4.09,'deg':307,'gust':7.66}) ;


--INSERT INTO datos_usuario JSON {"id_dato": uuid(), "nombre_lugar": "Cartaya", "nubes":{"all":92}};
