CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp()
);

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    categoriaId INT,
    createdAt DATETIME NOT NULL DEFAULT current_timestamp(),
    updatedAt DATETIME NOT NULL DEFAULT current_timestamp(),
    FOREIGN KEY (categoriaId) REFERENCES categorias(id) ON DELETE CASCADE
);

INSERT INTO categorias (nombre, descripcion) VALUES 
('Electrónica', 'Dispositivos electrónicos y gadgets'),
('Oficina', 'Material y accesorios de oficina');