CREATE TABLE tienda.pedidos (
    id UUID PRIMARY KEY,
    fecha TIMESTAMP,
    productos SET<TEXT>,
    total DOUBLE
);
