CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE products ( 
item_id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price FLOAT(4,2) NOT NULL,
stock_quantity INTEGER(5) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Bud Light', 'Bar', 3.00, 576);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coors Light', 'Bar', 3.00, 248);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Miller Lite', 'Bar', 3.00, 452);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Burger Patties', 'Kitchen', 4.75, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chicken Wings', 'Kitchen', 0.49, 765);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Salmon Filets', 'Kitchen', 8.75, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Souvenir T-Shirt XL', 'Retail', 14.95, 24);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Souvenor T-Shirt L', 'Retail', 13.95, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Concert Tickets', 'Entertainment', 10.00, 175);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Fireball Shots', 'Bar', 6.00, 48);