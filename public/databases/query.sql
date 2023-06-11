CREATE DATABASE Shoeshop_Database;
Use Shoeshop_Database;
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255),
    address TEXT,
    brand VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
    );
CREATE TABLE Shoe (
    shoe_id INT AUTO_INCREMENT PRIMARY KEY,
    shoe_name VARCHAR(255) NOT NULL,
    description TEXT,
    size INT,
    brand VARCHAR(255),
    price FLOAT,
    label1 VARCHAR(255),
    label2 VARCHAR(255),
    label3 VARCHAR(255)
);
CREATE TABLE Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATETIME
);
CREATE TABLE Items (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    quantity INT,
    shoe_id INT,
    user_id INT
);

INSERT INTO User () VALUES (1,"Ivor","Biggin","Your mum","N/A","SexiestManAlive@gmail.com","SexiestManAlive","123");
INSERT INTO Shoe () VALUES (1,"Shoe 1","A shoe",6,"Nike",3.99,"Sneakers","Blue","Black");
INSERT INTO Orders () VALUES (1,CURRENT_TIMESTAMP);
INSERT INTO Items () VALUES (1,1,3,1,1);

