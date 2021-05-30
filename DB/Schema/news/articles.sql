
Use news;
drop table if exists articles;
Create table articles
(
    articleID    varchar(100) PRIMARY KEY,
    url  varchar(1000) NOT NULL,
    sourceID int,
    title text,
    summary  text,
    content text,
    contentHash text,
    keywords text,
    TS datetime,
    parsedDate varchar(300),
    imageUrl varchar(1000),
    relevance tinyint
);

Use news;
drop table if exists categories;
Create table categories
(
    categoryID tinyint PRIMARY KEY AUTO_INCREMENT,
    name varchar(100) NOT NULL
);



Use news;
drop table if exists article_org;
Create table article_org
(
    articleID    varchar(100),
    orgID int

);


Use news;
drop table if exists article_category;
Create table article_category
(
    articleID    varchar(100),
    categoryID tinyint

);



select * from articles
