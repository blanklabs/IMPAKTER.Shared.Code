

Use `index`;
drop table if exists orgs;
Create table orgs
(
orgID int not null,
summary TEXT,
longSummary TEXT,
videoUrl varchar(500),
ratingID tinyint,
outlookID tinyint,
notes text
);


Use `index`;
drop table if exists orgStatus;
Create table orgStatus
(
orgID int not null,
isResearched BOOL DEFAULT false,
researchedTS datetime,
researchedByEmpID int,
doubleChecked BOOL DEFAULT false,
doubleCheckedTS datetime,
doubleCheckedByEmpID int,
tripleChecked BOOL DEFAULT false,
tripleCheckedTS datetime,
tripleCheckedByEmpID int,
published BOOL DEFAULT false,
publishedTS datetime,
publishedByEmpID int
);



Use `index`;
drop table if exists orgRatingHistorical;
Create table orgRatingHistorical
(
orgID int not null,
rating tinyint,
TS datetime
);


Use `index`;
drop table if exists org_sdg;
Create table org_sdg
(
    orgID    int NOT NULL,
    sdgID tinyint not null

);


