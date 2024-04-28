CREATE TABLE IF NOT EXISTS universidad.profesores (
    id UUID PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    asignaturas SET<TEXT>
);
