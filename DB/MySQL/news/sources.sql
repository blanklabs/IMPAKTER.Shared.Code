Use news;
drop table if exists sources;
Create table sources
(
    sourceID  Int  PRIMARY KEY AUTO_INCREMENT,
    name varchar(100),
    url  varchar(1000) NOT NULL,
    countryID char(2),
    typeID tinyint,
    specificity tinyint,
    credibility tinyint,
    frequencyID tinyint,
    orgID int,
    categoryID tinyint,
    description text,
    sourceLogo varchar(1000)
);

Use news;
drop table if exists sourceTypes;
create table sourceTypes
(
typeID tinyint primary key AUTO_INCREMENT,
name varchar(100)
);


drop table if exists sourceFrequency;
create table sourceFrequency
(
frequencyID tinyint primary key AUTO_INCREMENT,
name varchar(100)
);


drop table if exists source_region;
Create table source_region
(
    sourceID    int NOT NULL,
    regionID smallint not null

);

drop table if exists source_country;
Create table source_country
(
    sourceID    int NOT NULL,
    countryID char(2) not null

);

drop table if exists source_industry;
Create table source_industry
(
    sourceID    int NOT NULL,
    industryID char(1) not null

);

