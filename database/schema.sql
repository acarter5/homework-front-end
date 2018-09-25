DROP DATABASE IF EXISTS eaze;

CREATE DATABASE eaze;

USE eaze;

CREATE TABLE favorites (
  user_id int NOT NULL AUTO_INCREMENT,
  giphs text,
  PRIMARY KEY (user_id)
);

INSERT INTO favorites (giphs) VALUEs ("[]");

GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' WITH GRANT OPTION;

GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;