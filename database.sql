--CREATE kolas table
CREATE TABLE "koalas"
(
    "id" serial PRIMARY KEY,
    "name" varchar(12) NOT NULL,
    "gender" char(6) NOT NULL,
    "age" smallint NOT NULL,
    "ready_to_transfer" boolean,
    "notes" text
);

--INSERT into kolas table
INSERT INTO "koalas"
    ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
    ('Scotty', 'M', 4, 'y', 'Born in Gutamela');
--CREATE kolas table
CREATE TABLE "koalas"
(
    "id" serial PRIMARY KEY,
    "name" varchar(12) NOT NULL,
    "gender" char(6) NOT NULL,
    "age" smallint NOT NULL,
    "ready_to_transfer" boolean,
    "notes" text
);

--INSERT into kolas table
INSERT INTO "koalas"
    ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
    ('Scotty', 'M', 4, 'y', 'Born in Gutamela');
--CREATE kolas table
CREATE TABLE "koalas"
(
    "id" serial PRIMARY KEY,
    "name" varchar(12) NOT NULL,
    "gender" char(6) NOT NULL,
    "age" smallint NOT NULL,
    "ready_to_transfer" boolean,
    "notes" text
);

--INSERT into kolas table
INSERT INTO "koalas"
    ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
    ('Scotty', 'M', 4, 'y', 'Born in Gutamela');
INSERT INTO "koalas"
    ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES
    ('Jean', 'F', 5, 'y', 'Allergic to lots of lava'),
    ('Ororo', 'F', 7, 'n', 'Loves listening to Paula (Abdul)'),
    ('Logan', 'M', 15, 'n', 'Loves the sauna'),
    ('Charlie', 'M', 9, 'y', 'Favorite band is Nirvana'),
    ('Betsy', 'F', 4, 'y', 'Has a pet iguana');