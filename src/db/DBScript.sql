CREATE DATABASE UnitCostsApp;

USE UnitCostApp;

CREATE TABLE IF NOT EXISTS User(
	Id INT NOT NULL AUTO_INCREMENT,
	Firstname VARCHAR(100),
	Lastname VARCHAR(100),
	Email VARCHAR(200),
	Pswrd VARCHAR(1000),
	CONSTRAINT UsrPK PRIMARY KEY (Id)
);


/*
 * 
 * INSERT INTO User (Firstname, Lastname, Email, Pswrd) VALUES ('Edgar', 'Cardiel', 'edcar325@gmail.com', '1234');
 * SELECT * FROM User;
 */