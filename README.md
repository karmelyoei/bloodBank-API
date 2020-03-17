# blood bank-API

a simple blood bank API.For learning Goals.

# About this small project

a simple blood bank API. It does not have any HTML or CSS. Just nodejs and SQL.

# Achievements :

The data in our API is:

Patients: name, id, blood group
Donors: name, id, blood group, contact number, blood bank
Blood bank: name, city, contact number, list of donors.
endpoints available will be:

/donors with get and post methods.
/patients with get and post methods
/blood-banks with get and post methods.

# Testing:

I wrote 1 test for each endpoint.

# Using myApp

1. clone this Repo
1. npm init - y
1. npm i
1. Create your local database through these commands at the terminal

```
CREATE DATABASE (name of database);
CREATE USER (name of the user) WITH SUPERUSER PASSWORD (put password);
GRANT ALL PRIVILEGES ON DATABASE <database name here> TO <desired username entered previously>;
```

1. Create .env file and add the DATABASE_URL
1. npm start for localhost
1. npm run test

#Enjoy of learning new things BY @karmelyoei :performing_arts:
