drop table users;

CREATE TABLE users (
  id        SERIAL PRIMARY KEY,
  username  VARCHAR(30) NOT NULL,
  email     VARCHAR(100) NOT NULL,
  password  VARCHAR(120) not null,
  loggedin	BOOLEAN
);

SELECT * FROM users;