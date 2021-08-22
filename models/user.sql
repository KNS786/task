CREATE TABLE user(
     id INT NOT NULL AUTO_INCREMENT,
     username VARCHAR(255),
     fullname VARCHAR(255),
     email VARCHAR(255),
     password VARCHAR(255),
     PRIMARY KEY(id),
     UNIQUE INDEX uniq_username(username),
     UNIQUE INDEX uniq_email(email)
     );