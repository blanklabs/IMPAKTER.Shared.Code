Use organizations;
drop table if exists orgs;
Create table orgs
(
    orgID INT PRIMARY KEY AUTO_INCREMENT,
    name  varchar(200) NOT NULL,
    url varchar(1000),
    countryID char(2) DEFAULT 'US',
    typeID tinyint,
    revenue INT,
stockMarket VARCHAR(45) DEFAULT 'NASDAQ', 
ticker VARCHAR(45) DEFAULT 'NA',
address text,
description text,
logo varchar(1000),
accessToken varchar(200)
);


Use organizations;
drop table if exists orgIndex;
Create table orgIndex
(
orgID int not null,
longDescription TEXT,
sustainability TEXT,
sustainabilityLong TEXT,
rating tinyint,
outlook tinyint,
notes text,
researched BOOL DEFAULT false,
doubleChecked BOOL DEFAULT false,
tripleChecked BOOL DEFAULT false,
published BOOL DEFAULT false
);



Use organizations;
drop table if exists orgTypes;
create table orgTypes
(
typeID tinyint primary key AUTO_INCREMENT,
name varchar(100)
);




drop table if exists org_region;
Create table org_region
(
    orgID    int NOT NULL,
    regionID smallint not null

);

drop table if exists org_country;
Create table org_country
(
    orgID    int NOT NULL,
    countryID int not null

);

drop table if exists org_industry;
Create table org_industry
(
    orgID    int NOT NULL,
    industryID char(1) not null

);


