BEGIN;
            DROP TABLE IF EXISTS    patients, blood_banks , donors
            CASCADE;

CREATE TABLE patients
(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            blood_group VARCHAR(50) NOT NULL
);

CREATE TABLE donors
(
            donors_id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            blood_group VARCHAR(50) NOT NULL,
            contact_number NUMERIC NOT NULL

);

CREATE TABLE blood_banks
(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            city VARCHAR(50) NOT NULL,
            contact_number NUMERIC NOT NULL,
            donors_id INTEGER REFERENCES donors(donors_id)
);


COMMIT;


