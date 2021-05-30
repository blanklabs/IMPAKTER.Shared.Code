Use organizations;
drop table if exists orgs;
Create table orgs
(
orgID INT PRIMARY KEY AUTO_INCREMENT,
name  varchar(200) NOT NULL,
url varchar(1000),
typeID tinyint,
description text,
longDescription TEXT,
logoUrl varchar(1000)
);





Use organizations;
drop table if exists orgCommunication;
Create table orgCommunication
(
orgID int not null,
address text,
email varchar(250),
phone varchar(250),
facebookUrl varchar(500),
twitterUrl varchar(500),
instagramUrl varchar(500),
videoUrl varchar(500)
);

Use organizations;
drop table if exists orgLeadership;
Create table orgLeadership
(
orgID int not null,
CEOPersonID varchar(250),
CSOPersonID varchar(250),
CTOPersonID varchar(250)
);


Use organizations;
drop table if exists orgFinancial;
Create table orgFinancial
(
orgID int not null,
currentRevenue INT,
stockMarket VARCHAR(45) DEFAULT 'NASDAQ', 
stockTicker VARCHAR(45) DEFAULT 'NA'
);



Use organizations;
drop table if exists orgRevenue;
Create table orgRevenueHistorical
(
orgID int not null,
revenue INT,
TS datetime
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
    countryID char(2) DEFAULT 'US',
);

drop table if exists org_industry;
Create table org_industry
(
    orgID    int NOT NULL,
    industryID char(1) not null

);

drop table if exists org_industrySector;
Create table org_industrySector
(
    orgID    int NOT NULL,
    industrySectorID int not null

);





