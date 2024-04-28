CREATE TABLE IF NOT EXISTS universidad.alumnos (
    id UUID PRIMARY KEY,
    nombre TEXT,
    apellido TEXT,
    email TEXT,
    curso SET<INT>
);
