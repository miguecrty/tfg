-- Creamos el keyspace 'tienda'
CREATE KEYSPACE IF NOT EXISTS tienda WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };
-- Creamos el keyspace 'universidad'
CREATE KEYSPACE IF NOT EXISTS universidad WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

