
Use organizations;
insert into orgs (name) Values ("Rain Forest Alliance");
insert into orgs (name) Values ("B CORP");
insert into orgs (name) Values ("USDA Organic");
insert into orgs (name) Values ("BON SUCRO");
insert into orgs (name) Values ("Forest Stewardship Council");
insert into orgs (name) Values ("Impakter");

select * from orgs;




SELECT * from organizations.orgs where orgID = 6

update orgs set logoUrl = "https://gust-production.s3.amazonaws.com/uploads/startup/logo_image/756368/Copy_20of_20impakter_20logo_201_20android.jpg" where orgID = 6




insert into publications (publicationID,orgID) values ("sdasfdsdfdsf",1);

select * from publications;