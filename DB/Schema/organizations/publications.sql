Use organizations;
drop table if exists publications;
Create table publications
(
    publicationID varchar(500) PRIMARY KEY,
    orgID int not null,
    title varchar(500) default 'Title of the article',
    author varchar(500) Default 'NA',
    status SMALLINT DEFAULT 0,
    submissionTS datetime DEFAULT now()
);



