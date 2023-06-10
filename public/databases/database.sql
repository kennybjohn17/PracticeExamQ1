SHOW Databases;
CREATE DATABASE shoes;
USE shoes;
CREATE TABLE items (
    ->     id INT AUTO_INCREMENT PRIMARY KEY,
    ->     name VARCHAR(255) NOT NULL,
    ->     description TEXT,
    ->     size INT,
    ->     brand VARCHAR(255),
    ->      price FLOAT,
    ->      label1 VARCHAR(255),
    ->      label2 VARCHAR(255),
    ->      label3 VARCHAR(255)
    -> );

INSERT INTO items (id, name, description) VALUES (1,"Shoe 1","A shoe");
INSERT INTO items (id, name, description) VALUES (2,"Shoe 2","Another shoe");
INSERT INTO items (id, name, description) VALUES (3,"Shoe 3","Another shoe");
INSERT INTO items (id, name, description) VALUES (4,"Shoe 4","Another shoe");

