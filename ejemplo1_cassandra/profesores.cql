CREATE TABLE IF NOT EXISTS universidad.profesores (
    id UUID,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    asignaturas SET<TEXT>,
    PRIMARY KEY (id,asignaturas,apellido)
);
