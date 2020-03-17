
INSERT INTO donors
            (name, blood_group, contact_number)
VALUES
            ('Farah', 'o', 599413635),
            ('Jacob', 'A', 599413635),
            ('Yasmen', 'AB', 599413635);

INSERT INTO patients
            (name, blood_group)
VALUES
            ('Karmel', 'A'),
            ('Fadi', 'B'),
            ('Abood', 'AB');


INSERT INTO blood_banks
            (name, city, contact_number,donors_id)
VALUES
            ('Alymama', 'Al-Khader', 274568, 1),
            ('Alhussien', 'Bet Jallah', 274568, 2),
            ('Jerusalem', 'Jerusalem', 274568, 3);