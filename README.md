# Creating Simple CRUD App

## Directions:

### Install the following dependencies
* npm i express pg
* npm install --save cors

## Checklist
* [✅] Decide what new DB will contain
* [✅] Create a new ?music? DB
* [✅] Fill contents of new DB
* [✅] Run <code>npm i express pg</code>
* [✅] Run <code>npm install --save cors</code>
* [✅] Access DB
* [✅] Change queries to match new DB structure
* [✅] Manipulate information to have a good looking app
* [✅] Create README.md V1
* [✅] Push to github


CREATE TABLE artist (
    id serial PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Genre VARCHAR(100) NOT NULL,
    Gender VARCHAR(10) NOT NULL,
    Origin VARCHAR(20) NOT NULL,
    Albums VARCHAR(255) NOT NULL
);

INSERT INTO artist(Name, Genre, Gender, Origin, Albums)
VALUES('Jhene Aiko', 'R&B', 'Female', 'USA', '3');