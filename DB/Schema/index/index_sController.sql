select * from certificates;
select * from certificate_sdg;
select * from certificate_sdgTarget;


select * from certificateOrganizations;

CALL spAddCertificate("Test Certificate",1,"Certificate Desc");

insert into certificateOrganizations (organizationID,name) Values ("YWIEMCAHGKDGKURSCE","Rain Forest Alliance");
insert into certificateOrganizations (organizationID,name) Values ("UYUOPEWRNYUWEOVASD","B CORP");
truncate table certificateOrganizations;

select * from indexCertificates.certificateOrganizations;




update certificates set orgID = 1


use `index`;
insert into certificates (name,orgID,status) values ("Chain of Custody",6);
insert into certificates (name,orgID,status) values ("Pesticide Free",6,1);
insert into certificates (name,orgID,status) values ("Creulty Free",6,2);
insert into certificates (name,orgID,status) values ("B Corp",6,1);

insert into certificate_sdg values (3,1);
insert into certificate_sdg values (3,5);

insert into certificate_industry values (3,'A');
insert into certificate_industry values (3,'C');


insert into certificate_document values (3,'Certificate Procedure','https://impakter.com','en');

insert into org_sdg values (6,3),(6,5)