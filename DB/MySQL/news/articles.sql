
Use news;
drop table if exists articles;
Create table articles
(
    articleID    varchar(25) PRIMARY KEY,
    url  varchar(1000) NOT NULL,
    sourceID int NOT NULL,
    orgID int NOT NULL,
    categoryID tinyint NOT NULL,
    title text,
    summary  text,
    content text,
    keywords text,
    timestamp datetime,
    image varchar(1000),
    relevance tinyint
);

Use news;
drop table if exists categories;
Create table categories
(
    categoryID tinyint PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL
);






select * from articles
