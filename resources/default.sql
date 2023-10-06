CREATE TABLE posteos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userId INTEGER NOT NULL,
    titulo VARCHAR(250) NOT NULL,
    contenido VARCHAR(500) NOT NULL,
    created_at DATETIME NULL DEFAULT NOW(),
    updated_at DATETIME NULL DEFAULT NOW()
);

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(500) NOT NULL,
    password VARCHAR(500) NOT NULL,
    created_at DATETIME NULL DEFAULT NOW(),
    updated_at DATETIME NULL DEFAULT NOW()
);