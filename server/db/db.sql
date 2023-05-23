CREATE DATABASE IF NOT EXISTS pomodo;
USE pomodo;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios(
    id int auto_increment primary key,
    nome varchar(50) not null,
    nick varchar(50) not null unique,
    email varchar(50) not null unique,
    password varchar(100) not null,
    createdAt timestamp default current_timestamp()
) ENGINE = INNODB;
-- //--> 79O?;kP:M9az2B0xo6+OKefOb_3.2&#g

-- DROP TABLE IF EXISTS usuarios;
-- CREATE TABLE IF NOT EXISTS usuarios.usuarios (
-- 	id INT auto_increment NOT NULL unique,
-- 	nome varchar(100) NOT NULL,
-- 	nick varchar(100) NOT NULL unique,
-- 	email varchar(100) NOT NULL unique,
-- 	password varchar(100) NULL,
-- 	createdAt TIMESTAMP DEFAULT current_timestamp() NULL,
-- 	CONSTRAINT id PRIMARY KEY (id)
-- )
-- ENGINE=InnoDB
-- DEFAULT CHARSET=utf8mb4
-- COLLATE=utf8mb4_0900_ai_ci;